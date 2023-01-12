import React, { createContext, useState } from "react";

//Context erlaub das Browser Informationen von einer Seite (Unterschiedlichen Routes) zu der anderen zu speichern und zu steuern
export const BauteilContext = createContext();

//Defintion von Context für Bauteil-,Historie- und Userdata-Informationen
export const BauteilContextProvider = (props) => {
  const [bauteil, setBauteil] = useState([]);
  const [historie, setHistorie] = useState([]);
  const [userData, setUserData] = useState({});

  return (
    <BauteilContext.Provider
      value={{
        bauteil: bauteil,
        setBauteil,
        historie,
        setHistorie,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </BauteilContext.Provider>
  );
};
