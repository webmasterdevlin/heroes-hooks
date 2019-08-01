import React, { useState, useEffect } from "react";
import NewItemForm from "../../shared/components/NewItemForm";
import { addHero, getHeroes, removeHero } from "../hero-service";
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
  const [isShowNewItemForm, setIsShowNewItemForm] = useState(false);

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

  const showNewItemForm = () => {
    setIsShowNewItemForm(!isShowNewItemForm);
  };
  const onChange = ({ currentTarget: input }) => {
    const newHero = { ...hero };
    const { name, value } = input;
    newHero[name] = value;
    setHero(newHero);
  };

  const onSubmit = async event => {
    event.preventDefault();
    try {
      const { data: addedHero } = await addHero(hero);
      const newSetOfHeroes = [...heroes, addedHero];
      setHeroes(newSetOfHeroes);
      setIsShowNewItemForm(!isShowNewItemForm);
    } catch (e) {
      alert(e.message);
      throw e;
    }
  };

  const removeItem = async (id, name) => {
    const isConfirmed = window.confirm(`Delete ${name}?`);
    if (!isConfirmed) return;

    try {
      await removeHero(id);
      const newSetOfHeroes = heroes.filter(hero => hero.id !== id);
      setHeroes(newSetOfHeroes);
    } catch (e) {
      alert(e.message);
      throw e;
    }
  };
  return (
    <>
      <NewItemForm
        isShowNewItemForm={isShowNewItemForm}
        handleOnChange={onChange}
        handleOnSubmit={onSubmit}
        handleShowNewItemForm={showNewItemForm}
      />
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
                onClick={() => removeItem(item.id, item.firstName)}
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
