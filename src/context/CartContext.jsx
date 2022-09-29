import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const addItem = (item) => {
		const estaEnCarrito = cart.find((prod)=> prod.idproduct === item.idproduct)
		if (estaEnCarrito){
			const carritoActualizado = cart.map((prod)=>{
				if (prod.idproduct === item.idproduct){
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

	const removeItem = (idproduct) => {
		setCart(cart.filter((prod) => prod.idproduct !== idproduct))
	}

	const clear = () => {
		setCart([])
	}

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id)
	}

	const cartCantidad = ()=>{
		return cart.reduce((acumulador, prod)=> acumulador += prod.cantidad,0) 
	}

	const cartTotal = ()=>{
		return cart.reduce((acumulador, prod)=> acumulador += prod.precio * prod.cantidad,0)

	}


	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartCantidad, cartTotal}}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)