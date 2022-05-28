import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../components/store/categories/category.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
