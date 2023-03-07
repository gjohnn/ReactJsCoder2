
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar'
import Contador from './components/body/contador'
import ItemListCont from './components/ItemListContainer/itemlistcontainer';

function App() {
  
  return (
   <>
   <NavBar />
   <ItemListCont/>
   <Contador />
   
   </>
  );
    
}

export default App;
