import Register from "./componenets/Register";
import Login from "./componenets/Login";
import Home from "./componenets/Home";
import ReservationPage from "./componenets/ReservationPage";


import { BrowserRouter,Routes,Route, } from "react-router-dom";


function App() {
  return (
    <div>
      
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/login" element= { <Login/>} />
              <Route path="/reservation" element= { <ReservationPage/>} />
              
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
