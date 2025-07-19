import React, { useEffect, useState } from "react";
import "./adminPanel.scss";

const PRODUCT_TYPES = [
  "PILSNER",
  "WEIZEN",
  "DUNKEL",
  "AMERICAN WHEAT ALE",
  "ARMENIAN BARLEY WINE",
];

const PRODUCT_FORMS = ["շշային", "թափվող"];

const PRODUCT_COLOR_MAP = {
  WEIZEN: "Pastel/Sandy Orange",
  PILSNER: "Dark Blue-Gray",
  "AMERICAN WHEAT ALE": "Muted Yellow-Green",
  DUNKEL: "Rich Reddish-Brown",
  CHERRY: "Bold Crimson Red",
  "ARMENIAN BARLEY WINE": "Gold Amber",
};

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [locations, setLocations] = useState([]);

  const [newLocation, setNewLocation] = useState({
    name: "",
    region: "",
    latitude: "",
    longitude: "",
    phone: "+374",
    products: [],
  });

  const [productForms, setProductForms] = useState(
    PRODUCT_TYPES.map((type) => ({
      type,
      forms: [],
    }))
  );

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setLocations([...data]));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Ներդրված մուտքանունը կամ գաղտնաբառը սխալ է");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLogin("");
    setPassword("");
  };

  const handleInputChange = (e) => {
    setNewLocation({ ...newLocation, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (index, form) => {
    const updated = [...productForms];
    if (updated[index].forms.includes(form)) {
      updated[index].forms = updated[index].forms.filter((f) => f !== form);
    } else {
      updated[index].forms.push(form);
    }
    setProductForms(updated);
  };

  const handleAddAllProducts = () => {
    const finalProducts = [];
    productForms.forEach((product) => {
      const color = PRODUCT_COLOR_MAP[product.type] || "Unknown";
      product.forms.forEach((form) => {
        finalProducts.push({ type: product.type, form, color });
      });
    });

    if (finalProducts.length === 0) {
      alert("Խնդրում ենք ընտրել առնվազն մեկ ապրանք և տեսակ");
      return;
    }

    setNewLocation({
      ...newLocation,
      products: [...newLocation.products, ...finalProducts],
    });

    setProductForms(PRODUCT_TYPES.map((type) => ({ type, forms: [] })));
  };

  const handleAddLocation = async (e) => {
    e.preventDefault();
    const { name, region, latitude, longitude, phone, products } = newLocation;

    if (!name || !region || !latitude || !longitude || products.length === 0) {
      alert("Խնդրում ենք լրացնել բոլոր դաշտերը և ավելացնել առնվազն մեկ ապրանք");
      return;
    }

    const newEntry = {
      id: Date.now(),
      name,
      region,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      phone: phone || "",
      products,
    };

    await fetch("http://localhost:3000/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    });

    setLocations([...locations, newEntry]);
    setNewLocation({
      name: "",
      region: "",
      latitude: "",
      longitude: "",
      phone: "+374",
      products: [],
    });
    setProductForms(PRODUCT_TYPES.map((type) => ({ type, forms: [] })));
  };

  if (!isAuthenticated) {
    return (
      <div className="admin">
        <div className="admin-login">
          <h2>Մուտք ադմին վահանակ</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Մուտքանուն"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Գաղտնաբառ"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Մուտք</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="admin-login">
        <h2>Ադմինիստրատորի վահանակ</h2>
        <button onClick={handleLogout}>Ելք</button>

        <div className="admin-form">
          <h3>Ավելացնել նոր վայր</h3>
          <form onSubmit={handleAddLocation}>
            <input
              type="text"
              name="name"
              placeholder="Անուն"
              value={newLocation.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="region"
              placeholder="Տարածաշրջան"
              value={newLocation.region}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="latitude"
              placeholder="Լայնություն"
              value={newLocation.latitude}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="longitude"
              placeholder="Երկայնություն"
              value={newLocation.longitude}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Հեռախոսահամար"
              value={newLocation.phone}
              onChange={handleInputChange}
            />

            <div className="product-form">
              <h4>Ավելացնել արտադրանքներ</h4>
              {productForms.map((product, index) => (
                <div key={index} className="product-block">
                  <strong>{product.type}</strong>
                  <hr />
                  <div>
                    Տեսակ:
                    {PRODUCT_FORMS.map((form) => (
                      <label key={form}>
                        <input
                          type="checkbox"
                          checked={product.forms.includes(form)}
                          onChange={() =>
                            handleCheckboxChange(index, form)
                          }
                        />
                        {form}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button type="button" onClick={handleAddAllProducts}>
                Ավելացնել բոլոր ապրանքները
              </button>
              <ul>
                {newLocation.products.map((p, i) => (
                  <li key={i}>
                    {p.type} - {p.form} - {p.color}
                  </li>
                ))}
              </ul>
            </div>
            <button type="submit">Ավելացնել վայր</button>
          </form>
        </div>

        <div className="admin-list">
          <h3>Ավելացված վայրեր</h3>
          {locations.length === 0 ? (
            <p>Գտնվելու վայրեր դեռ չկան</p>
          ) : (
            <ul>
              {locations.map((loc) => (
                <li key={loc.id}>
                  <strong>{loc.name}</strong> — {loc.region} ({loc.latitude},{" "}
                  {loc.longitude})
                  {loc.phone && <div>📞 {loc.phone}</div>}
                  <ul>
                    {loc.products?.map((p, i) => (
                      <li key={i}>
                        {p.type} - {p.form} - {p.color}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
