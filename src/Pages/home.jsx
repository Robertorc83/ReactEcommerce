import React from "react";
import Welcome from "../Components/welcome.jsx";
import Productos from "../Components/productos.jsx";
import Nosotros from "../Components/nosotros.jsx";
import Footer from "../Components/footer.jsx";
import TagCarrito from "../Components/tagCarrito.jsx";
import Navbar from "../Components/navbar.jsx";


const Home = () =>{
  
  return (
    <React.Fragment>
      <div>
      <Navbar />
      </div>
      
      <div className="min-h-screen">
        <Welcome/>
        <Productos/>
        <Nosotros/>
        <Footer/> 
      </div>
       
    </React.Fragment>
  );
}

export default Home;