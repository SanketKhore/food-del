import { BrowserRouter,Routes,Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Main from "./pages/main/Main";
import Cart from "./pages/cart/Cart";
function App(){
  return(
    <>
    <BrowserRouter>
      <RecoilRoot>
      <Routes>
          <Route path="/" element={<Main/>}/>
          {/* <Route path="/cart" element={<Cart/>}/> */}
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
    </>
  )
}

export default App;