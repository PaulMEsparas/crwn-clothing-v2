import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import { getCateforiesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CatergoriesContext = createContext({
  categoriesMap: {},
});

export const CatergoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCateforiesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  //just to add data to firestore
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CatergoriesContext.Provider value={value}>
      {children}
    </CatergoriesContext.Provider>
  );
};
