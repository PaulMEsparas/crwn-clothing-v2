import Category from "../category-item/category-item.component.js";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      <Category categories={categories} />
    </div>
  );
};

export default Directory;
