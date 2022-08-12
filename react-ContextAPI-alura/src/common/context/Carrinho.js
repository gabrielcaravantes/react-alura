import { useState } from 'react';
import { createContext } from 'react'

export const CarrinhoContext = createContext();
CarrinhoNome.displayName = "Carrinho"

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            { children }
        </CarrinhoContext.Provider>
    )
}



