import { createContext, useContext } from "react";
import { MainContextProps } from "../@types/contextProps";

export const MainContext = createContext<MainContextProps | null>(null);
export const useMainContext = () => useContext(MainContext) as MainContextProps;
