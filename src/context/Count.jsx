import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();


export default function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    const [pop, setPop] = useState(0)

    return (
        <CountContext.Provider value={{ count, setCount, pop, setPop }}>
            {children}
        </CountContext.Provider>
    );
}

export function useCount() {
    const context = useContext(CountContext)
    if (!context) throw new Error("Deve-se usar CountProvider!")
    const { count, setCount } = context;
    return { count, setCount };
}
export function usePop() {
    const context = useContext(CountContext)
    if (!context) throw new Error("Deve-se usar CountProvider!")
    const { pop, setPop } = context;
    return { pop, setPop };
}