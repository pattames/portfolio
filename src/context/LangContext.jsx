import { createContext, useState } from "react";

export const LangContext = createContext();

export default function LangContextProvider(props) {
  const [english, setEnglish] = useState(true);

  return (
    <LangContext.Provider value={{ english, setEnglish }}>
      {props.children}
    </LangContext.Provider>
  );
}
