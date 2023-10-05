import React, { useState, useEffect } from "react";
import { HeroesData } from "./heroesInterfaces";
import "./Heroes.css";

function Heroes() {
  const [data, setData] = useState<HeroesData[]>([]);
  const [filterName, setFilterName] = useState("");

  async function fetchData() {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
    );
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event: any) => {
    setFilterName(event.target.value);
  };

  const filteredHeroes = data.filter((hero) =>
    hero.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const heroesList = (
    <div className="heroes-list">
      <div className="filter-input">
        <input
          type="text"
          className="text-input"
          placeholder="Search by name"
          value={filterName}
          onChange={handleInputChange}
        />
      </div>
      {filteredHeroes.map((hero: HeroesData, index) => {
        const colorClass = index % 6 < 3 ? "blue-item" : "red-item";
        return (
          <div key={index} className="card-container">
            <div className="card-image">
              <img src={hero.images.sm} alt="React Image" />
            </div>
            <div className={colorClass}>
              <h2>{hero.name}</h2>
              <p>Fullname: {hero.biography.fullName}</p>
              <p>Race: {hero.appearance.race}</p>
              <p>Alignment: {hero.biography.alignment}</p>
              <p>Publisher: {hero.biography.publisher}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
  return <div className="body">{heroesList}</div>;
}

export default Heroes;
