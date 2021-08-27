import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/home";
import TopNav from "./component/Topnav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home />
    </div>
  );
}

export default App;
