import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./StoreConfig";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
