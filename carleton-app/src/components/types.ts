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

export interface FilterComponentProps {
    filterName: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
  
export interface TagComponentProps {
    tagName: string;
    handleTagInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddTag: () => void;
    heroTags: string[];
  }
  
  