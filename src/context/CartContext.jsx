import { createContext, useContext, useState, useEffect } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

 	useEffect(() => {
			let carrito = []
			if (localStorage.getItem("carrito")){
				carrito = JSON.parse(localStorage.getItem("carrito"))
			}
			setCart(carrito)
	}, [])

	useEffect(() => {
		localStorage.setItem("carrito", JSON.stringify(cart))
	}, [cart])


	const addItem = (item) => {
		const estaEnCarrito = cart.find((prod) => prod.id === item.id)
		if (estaEnCarrito) {
			const carritoActualizado = cart.map((prod) => {
				if (prod.id === item.id) {
					return { ...prod, cantidad: prod.cantidad + item.cantidad }
				} else {
					return prod
				}
			})
			setCart(carritoActualizado)
		} else {
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

	const cartCantidad = () => {
		return cart.reduce((acumulador, prod) => acumulador += prod.cantidad, 0)
	}

	const cartTotal = () => {
		return cart.reduce((acumulador, prod) => acumulador += prod.precio * prod.cantidad, 0)

	}


	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartCantidad, cartTotal }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)