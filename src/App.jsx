import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from './Components/MyNavbarComponent'
import MyFooter from "./Components/MyFooter";
import MyAlert from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav/>
      </header>
      <MyAlert/>
      <MyFooter/>
    </div>
  );
}

export default App;
