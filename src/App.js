import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ThemeProvider } from '@emotion/react';
import theme from './MuiTheme';
import { ItemDetailContainer } from './components/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { Comprar } from './components/Comprar';



function App() {
const greeting = "Bienvenido a Telco-Store, tu principal proveedor de insumos de telecomunicaciones"

  return (
    <CartProvider>
    	<ThemeProvider theme = {theme}>
    		<BrowserRouter>
				{/* //Componentes presentes en todas las rutas */}
				<NavBar/>
    			<Routes>
    				<Route path="/" element={<ItemListContainer greeting = {greeting}/>}/>
					<Route path="/category/:idcategory" element={<ItemListContainer/>}/>
					<Route path="/product/:id" element={<ItemDetailContainer/>}/>
    	    		<Route path="/cart" element={<Cart/>}/>
    	    		<Route path="/comprar" element={<Comprar/>}/>
    			</Routes>
    		</BrowserRouter>
   		</ThemeProvider>
	</CartProvider>


   /* 
    <div>
       <NavBar/>
       <ItemListContainer greeting = {greeting}/>
    </div> */
  
    /* <ItemDetailContainer/> */
    /* <FetchContainer/> */
    
  );
}

export default App;
