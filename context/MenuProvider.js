"use client"

import React, { useEffect, useState } from "react";

export const MenuContext = React.createContext();

export function MenuProvider({ children }) {

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        setMenu(menu)
    }, [])

    return (
        <MenuContext.Provider value={{menu, setMenu}}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider;
