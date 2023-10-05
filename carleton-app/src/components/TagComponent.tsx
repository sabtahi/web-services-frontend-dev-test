import React from "react";
import "./TagComponent.css";
import { TagComponentProps } from "./types";

const TagComponent: React.FC<TagComponentProps> = ({
  tagName,
  handleTagInputChange,
  handleAddTag,
  heroTags,
}) => {
  return (
    <div>
      <h3 className="title">Tags</h3>
      <div className="tag">
        <input
          type="text"
          className="tag-text-input"
          placeholder="Add tag"
          value={tagName}
          onChange={handleTagInputChange}
        />
        <button className="tag-button" onClick={handleAddTag}>
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
  );
};

export default TagComponent;
