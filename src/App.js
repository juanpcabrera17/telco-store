import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ThemeProvider } from '@emotion/react';
import theme from './MuiTheme';
/* import ItemCount from './components/ItemCount';
import FetchContainer from './test/FetchContainer';*/
import { ItemDetailContainer } from './components/ItemDetailContainer'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
const greeting = "Bienvenido a Telco-Store, tu principal proveedor de insumos de telecomunicaciones"

  return (
    <ThemeProvider theme = {theme}>
    	<BrowserRouter>
			{/* //Componentes presentes en todas las rutas */}
			<NavBar/>
    		<Routes>
    			<Route path="/" element={<ItemListContainer/>}/>
				<Route path="/category/:idcategory" element={<ItemListContainer/>}/>
				<Route path="/product/:idproduct" element={<ItemDetailContainer/>}/>
    		</Routes>
    	</BrowserRouter>
    </ThemeProvider>


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
