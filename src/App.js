import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ThemeProvider } from '@emotion/react';
import theme from './MuiTheme';

function App() {
const greeting = "hola, como estas?"

  return (
    <ThemeProvider theme = {theme}>
    <div>
       <NavBar/>
       <ItemListContainer greeting = {greeting}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
