"use client";
import React, { createContext, useState } from "react";


interface MenuContextProps {
  open: boolean;
  toggle: () => void;
}

const defaultMenuContext: MenuContextProps = {
  open: false,
  toggle: () => {
    console.warn('toggle function should be overridden by a MenuContextProvider');
  },
};


// export const MenuContext = createContext();
// export const MenuContext = createContext<MenuContextProps | undefined>(undefined);
export const MenuContext = createContext<MenuContextProps>(defaultMenuContext);

interface MenuContextProviderProps {
  children: React.ReactNode;
}


const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log({open});
    setOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
