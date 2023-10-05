import React, { useState, useEffect } from "react";
import { HeroesData } from "./heroesInterfaces";

function Heroes() {
  const [data, setData] = useState<HeroesData[]>([]);

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

  const heroesList = (
    <div>
      {data.map((hero: HeroesData, index) => (
        <div key={index}>
          <img src={hero.images.sm} alt="React Image" />
          <h2>{hero.name}</h2>
          <p>Fullname: {hero.biography.fullName}</p>
          <p>Race: {hero.appearance.race}</p>
          <p>Alignment: {hero.biography.alignment}</p>
          <p>Publisher: {hero.biography.publisher}</p>
        </div>
      ))}
    </div>
  );
  return <> {heroesList}</>;
}

export default Heroes;
