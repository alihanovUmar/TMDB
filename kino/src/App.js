import "./App.css";
import Privite from "./Privite";
import { useAuth } from "./hook/useAuth";
import { Login } from "./pages/Login/Login";

function App() {
  const { token } = useAuth();

  if (token) {
    return <Privite />;
  }
  return <Login/>
}

export default App;
