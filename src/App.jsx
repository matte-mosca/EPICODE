import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from './Components/MyNavbarComponent'
import MyFooter from "./Components/MyFooter";
import MyAlert from "./Components/Welcome";
import Cards from "./Components/AllTheBooks"; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav/>
      </header>
      <MyAlert/>
      <Cards/>
      <MyFooter/>
    </div>
  );
}

export default App;
