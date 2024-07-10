import {BrowserRouter, Route, Routes, redirect} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from "recoil";
import "./App.css"

function App(){
  return(
    <>
    <ToastContainer/>
      <Navbar/>
      <BrowserRouter>
      <div className="browserRouter">
      <Sidebar/>
      <RecoilRoot>
        <Routes>
              <Route path="/add" element={<Add/>}/>
              <Route path="/list" element={<List/>}/>
              {/* <Route path="/orders" element={<Orders/>}/> */}
        </Routes>
      </RecoilRoot>
        
      </div>
      </BrowserRouter>
    </>
  )
}

export default App;