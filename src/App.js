import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ThemeProvider } from '@emotion/react';
import theme from './MuiTheme';
import ItemCount from './components/ItemCount';
import FetchContainer from './test/FetchContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function onAdd(){
	//?
}

function App() {
const greeting = "hola, como estas?"

  return (
    <ThemeProvider theme = {theme}>
    <div>
       <NavBar/>
       <ItemListContainer greeting = {greeting}/>
       <ItemCount stock = {5} initial = {2} onAdd = {onAdd}/>
    </div>
  
    <ItemDetailContainer/>
    {/* <FetchContainer/> */}
    </ThemeProvider>
  );
}

export default App;
