import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const addItem = (item) => {
		const estaEnCarrito = cart.find((prod)=> prod.id === item.id)
		if (estaEnCarrito){
			const carritoActualizado = cart.map((prod)=>{
				if (prod.id === item.id){
					return {...prod,cantidad:prod.cantidad + item.cantidad}
				}else{
					return prod
				}
			})
			setCart(carritoActualizado)
		}else{
			setCart([...cart, item])
		}
	}

	const removeItem = (id) => {
		setCart(cart.filter((prod) => prod.id !== id))
	}

	const clear = () => {
		setCart([])
	}

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id)
	}

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)