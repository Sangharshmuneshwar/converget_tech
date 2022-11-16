import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import './App.css';
import Header from "./components/Header";
import  AddEdit  from "./pages/AddEdit";
import Home from "./pages/Home";

function App() {
  return (
     <BrowserRouter>
     <Header/>
         <div className="App">
          <ToastContainer/>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
        
        <Route path="/add" element={<AddEdit />}/>
        <Route path="/update/:id" element={<AddEdit />}/>

         
        
    </Routes>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
