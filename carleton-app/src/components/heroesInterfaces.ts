export interface HeroesData {
  id: number;
  images: {
    sm: string;
  };
  name: string;
  biography: {
    fullName: string;
    alignment: string;
    publisher: string;
  };
  appearance: {
    race: string;
  };
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}
