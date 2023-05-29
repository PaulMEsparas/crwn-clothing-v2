import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// import { useContext } from "react";

// import CategoryPreview from "../../components/category-preview/category-preview.component";

// import { CatergoriesContext } from "../../contexts/categories.context";

// import "./shop.styles.scss";

// const Shop = () => {
//   const { categoriesMap } = useContext(CatergoriesContext);

//   return (
//     <div className="shop-container">
//       {Object.keys(categoriesMap).map((title) => {
//         const products = categoriesMap[title];
//         console.log(products);
//         return (
//           <CategoryPreview key={title} title={title} products={products} />
//         );
//       })}
//     </div>
//   );
// };

// export default Shop;

// <Fragment key={title}>
// <h2>{title}</h2>
// <div className="products-container">
//   {categoriesMap[title].map((product) => (
//     <ProductCard key={product.id} product={product} />
//   ))}
// </div>
// </Fragment>
