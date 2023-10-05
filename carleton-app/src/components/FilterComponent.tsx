import { FilterComponentProps } from "./types";

import "./FilterComponent.css";

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterName,
  handleInputChange,
}) => {
  return (
    <div className="filter-input">
      <input
        type="text"
        className="filter-text-input"
        placeholder="Search by name or tag"
        value={filterName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterComponent;
