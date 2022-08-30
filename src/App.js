import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ThemeProvider } from '@emotion/react';
import theme from './MuiTheme';
import ItemCount from './components/ItemCount';


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
       <ItemCount stock = '5' initial = '2' onAdd = {onAdd}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
