import { ReactNode } from "react";
import { ClienteContextProvider } from "./cliente";

export interface GlobalContextProps {
  children: ReactNode;
}

export function GlobalContext(props: GlobalContextProps) {
  return (
    <ClienteContextProvider>{props.children}</ClienteContextProvider>
  );
}