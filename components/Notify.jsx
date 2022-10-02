import React, { useContext } from "react";
import { DataContext } from "../Store/GloBalStore";
import Loading from "./Loading";
import Toat from "./Toat";
export default function Notify() {
  const {state, dispatch} = useContext(DataContext);
  const { notify} = state;
  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toat
          msg={{ msg: notify.error, title: "Error" }}
          handlShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-red"
        />
      )}
      {notify.success && (
        <Toat
          msg={{ msg: notify.success, title: "OKE" }}
          handlShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-yelow"
        />
      )}
    </>
  );
}
