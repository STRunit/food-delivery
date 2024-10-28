"use client"
import { CategoryContainer } from "@/components/category-container";
import { FeatureContainer } from "@/components/feature-container";
import { Main } from "@/components/main";
import { createContext } from "react";
import { Error } from "@/components/error";
import { ErrorIcon } from "@/components/icons/error-icon";
import { Loading } from "@/components/loading";
import { useCategoriesWithFoods } from "@/hooks/useCategoriesWithFoods";

export const CategoriesWithFoodsContext = createContext();

export default function Home() {
  const { response, loading, error } = useCategoriesWithFoods();

  if (loading) return <Loading />
  if (error) return
  (<Error errorMessage="Уучлаарай систем ачааллахад алдаа гарлаа.">
    <ErrorIcon />
  </Error>)

  return <CategoriesWithFoodsContext.Provider value={{ response, loading, error }}>
    <div>
      <Main />
      <FeatureContainer />
      <CategoryContainer />
    </div>
  </CategoriesWithFoodsContext.Provider>
}
