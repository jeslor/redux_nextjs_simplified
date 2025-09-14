"use client";
import { Provider } from "react-redux";
import { myStore } from "../../store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const store = myStore;

  return <Provider store={store}>{children}</Provider>;
}
