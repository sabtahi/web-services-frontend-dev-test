import "./FilterComponent.css";
import { FilterComponentProps } from "./types";

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterName,
  handleInputChange,
}) => {
  return (
    <div className="filter-input">
      <input
        type="text"
        className="filter-text-input"
        placeholder="Search by name"
        value={filterName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterComponent;
