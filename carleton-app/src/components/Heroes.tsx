import React, { useState, useEffect } from "react";
import { HeroesData } from "./heroesInterfaces";
import "./Heroes.css";

function Heroes() {
  const [data, setData] = useState<HeroesData[]>([]);
  const [filterName, setFilterName] = useState("");
  const [tags, setTags] = useState<Record<number, string[]>>({});
  const [tagName, setTagName] = useState("");
  const [expandedHeroIndex, setExpandedHeroIndex] = useState<number | null>(
    null
  );

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

  const handleTagInputChange = (event: any) => {
    setTagName(event.target.value);
  };

  const handleTogglePowers = (index: number) => {
    setExpandedHeroIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAddTag = (heroId: number) => {
    if (tagName.trim() !== "") {
      setTags((prevTags) => {
        const newTags = { ...prevTags };
        newTags[heroId] = [...(newTags[heroId] || []), tagName];
        return newTags;
      });
      setTagName("");
    }
  };

  const filteredHeroes = data.filter((hero) =>
    hero.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const allTags: string[] = [];
  Object.values(tags).forEach((heroTags) => {
    allTags.push(...heroTags);
  });

  const heroesList = (
    <div className="heroes-list">
      <div className="filter-input">
        <input
          type="text"
          className="filter-text-input"
          placeholder="Search by name"
          value={filterName}
          onChange={handleInputChange}
        />
      </div>
      <div className="added-tags">
        {allTags.map((tag, index) => (
          <div key={index} className="tag-rectangle">
            {tag}
          </div>
        ))}
      </div>

      {filteredHeroes.map((hero: HeroesData, index) => {
        const colorClass = index % 6 < 3 ? "blue-item" : "red-item";
        const isExpanded = expandedHeroIndex === index;
        const heroId = hero.id;
        const heroTags = tags[heroId] || [];
        return (
          <div
            key={index}
            className={`card-container ${isExpanded ? "expanded" : ""}`}
          >
            <div className="card-image">
              <img src={hero.images.sm} alt="React Image" />
            </div>
            <div className={colorClass}>
              <h2>{hero.name}</h2>
              <p>Fullname: {hero.biography.fullName}</p>
              <p>Race: {hero.appearance.race}</p>
              <p>Alignment: {hero.biography.alignment}</p>
              <p>Publisher: {hero.biography.publisher}</p>
              {isExpanded && hero.powerstats && (
                <div>
                  <div className="powers-list">
                    <h3 className="title">Powers</h3>
                    <p>Inteligence: {hero.powerstats.intelligence}%</p>
                    <p>Strength: {hero.powerstats.strength}%</p>
                    <p>Speed: {hero.powerstats.speed}%</p>
                    <p>Durability: {hero.powerstats.durability}%</p>
                    <p>Power: {hero.powerstats.power}%</p>
                    <p>Combat: {hero.powerstats.combat}%</p>
                  </div>

                  <h3 className="title">Tags</h3>
                  <div className="tag">
                    <input
                      type="text"
                      className="tag-text-input"
                      placeholder="Add tag"
                      value={tagName}
                      onChange={handleTagInputChange}
                    />
                    <button
                      className="tag-button"
                      onClick={() => handleAddTag(heroId)}
                    >
                      Add tag
                    </button>
                  </div>
                  <div>
                    {heroTags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="tag-rectangle">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="toggle">
              <div
                className="toggle-circle"
                onClick={() => handleTogglePowers(index)}
              >
                {isExpanded ? "-" : "+"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  return <div className="body">{heroesList}</div>;
}

export default Heroes;
