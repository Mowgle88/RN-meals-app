import { createContext, ReactNode, useState } from "react";

interface FavoritesContextInterface {
  ids: string[],
  addFavorite: (id: string) => void,
  removeFavorite: (id: string) => void
}

interface FavoritesContextProvider {
  children?: ReactNode | undefined,
  // value: FavoritesContextInterface;
}

export const FavoritesContext = createContext<FavoritesContextInterface>({
  ids: [],
  addFavorite: (id: string) => { },
  removeFavorite: (id: string) => { }
});

export default function FavoritesContextProvider({ children }: FavoritesContextProvider) {
  const [favoriteMeals, setFavoriteMeals] = useState<string[] | never[]>([]);

  function addFavorites(id: string) {
    setFavoriteMeals((currentFavIds) => [...currentFavIds!, id]);
  }

  function removeFavorites(id: string) {
    setFavoriteMeals((currentFavIds) => currentFavIds!.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMeals,
    addFavorite: addFavorites,
    removeFavorite: removeFavorites
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )

}