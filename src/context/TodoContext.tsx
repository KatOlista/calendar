import {
  ReactNode,
  createContext,
} from 'react';

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextType = {
  // currentCart: LocalStorageCart;
  // setCurrentCart: React.Dispatch<React.SetStateAction<LocalStorageCart>>;
  // cartItems: Phone[];
  // setCartItems: (items: Phone[]) => void;
  // currentFavoritesIds: number[],
  // handleDelete: (id: number) => void;
  // handleCountMinus: (id: number) => void;
  // handleCountPlus: (id: number) => void;
  // toggleItemToCart: (id: number) => void;
  // toggleItemToFavourites: (id: number) => void;
  // checkInCart: (id: number) => boolean;
  // checkInFav: (id: number) => boolean;
  // isCartEmpty: boolean;
  // setIsCartEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  // setCurrentProductName: (name: string) => void;
  // currentProductName: string
};

export const TodoContext = createContext<TodoContextType>({
  //   currentCart: [],
  // setCurrentCart: () => {},
  // cartItems: [],
  // setCartItems: () => {},
  // currentFavoritesIds: [],
  // handleDelete: () => {},
  // handleCountMinus: () => {},
  // handleCountPlus: () => {},
  // toggleItemToCart: () => false,
  // toggleItemToFavourites: () => false,
  // checkInCart: () => false,
  // checkInFav: () => false,
  // isCartEmpty: false,
  // setIsCartEmpty: () => {},
  // setCurrentProductName: () => {},
  // currentProductName: '',
});

export function TodoProvider({ children }: TodoProviderProps) {

  const value = {
    // currentCart,
    // setCurrentCart,
    // cartItems,
    // setCartItems,
    // currentFavoritesIds,
    // handleDelete,
    // handleCountMinus,
    // handleCountPlus,
    // toggleItemToCart,
    // toggleItemToFavourites,
    // checkInCart,
    // checkInFav,
    // isCartEmpty,
    // setIsCartEmpty,
    // setCurrentProductName,
    // currentProductName,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
