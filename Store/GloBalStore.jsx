import React, { createContext, useEffect, useReducer } from "react";
import reducers from "./Reduces";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();
export default function GloBalStore({ children }) {
  const initialState = { notify: {}, auth: {}, cart: [] };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    const __next__cart01__devat = JSON.parse(
      localStorage.getItem("__next__cart01__devat")
    );

    if (__next__cart01__devat)
      dispatch({ type: "ADD_CART", payload: __next__cart01__devat });
  }, []);

  useEffect(() => {
    localStorage.setItem("__next__cart01__devat", JSON.stringify(cart));
  }, [cart]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
