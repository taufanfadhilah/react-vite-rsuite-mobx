import { createContext, useContext } from "react";
import todoStore from "./TodoStore";

const store = {
  todoStore: new todoStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;