import React, { useState, useEffect } from "react";
import NewItemForm from "../../shared/components/NewItemForm";
import { getHeroes } from "../hero-service";
import { Link } from "react-router-dom";

export default function Heroes() {
  const [hero, setHero] = useState({
    hero: {
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: ""
    }
  });
  const [heroes, setHeroes] = useState([hero]);
  const [isShowNewItem, setIsShowNewItem] = useState(false);

  useEffect(() => {
    onLoadData();
  }, []);

  const onLoadData = async () => {
    const { data } = await getHeroes();
    console.table(data);
    const newHereos = [...heroes, data];
    setHeroes(data);
    console.log("setHeroes: ", heroes);
  };
  return (
    <>
      <NewItemForm />
      {heroes.map(item => (
        <div key={item.id} className="card mt-3" style={{ width: "auto" }}>
          <div className="card-header">
            <h3 className="card-title">
              {item.firstName} {item.lastName}
            </h3>
            <h5 className="card-subtitle mb-2 text-muted">{item.house}</h5>
            <p className="card-text">{item.knownAs}</p>
          </div>
          <section className="card-body">
            <div className="row">
              <button
                onClick={() => this.removeItem(item.id, item.firstName)}
                className="btn btn-outline-danger card-link col text-center"
              >
                <span className="fas fa-eraser  mr-2" />
                Delete
              </button>
              <Link
                to={`/edit-hero/${item.id}`}
                className="btn btn-outline-primary card-link col text-center"
              >
                <span className="fas fa-edit  mr-2" />
                Edit
              </Link>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
