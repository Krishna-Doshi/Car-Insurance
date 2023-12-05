import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import { Home } from "./Components/Home";
import { AboutUs } from "./Components/AboutUs";
import { Blog } from "./Components/Blog";
import { ContactUs } from "./Components/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
