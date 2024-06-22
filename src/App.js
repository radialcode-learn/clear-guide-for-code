import logo from "./logo.svg";
import "./App.css";
// BOOTSTRAP CSS ===============================
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="d-flex flex-col justify-content-center align-items-center vh-100">
      <Button>HELLO</Button>
    </div>
  );
}

export default App;
