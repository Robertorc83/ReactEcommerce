import React from 'react'
import Producto from '../Components/producto'
import Footer from '../Components/footer'
import {tejas} from '../Components/productos.jsx'
import TagCarrito from '../Components/tagCarrito'


const Tejas = () => {
  return (
    <>
    <TagCarrito/>
    <Producto image={tejas} title="TEJAS" description="Pecanas Mahan, 100% libres de pesticidas e insecticidas, esteproducto es de temporada, es decir no  vendemos productos guardados, estos son 100% frescos."/>
    <Footer/>
    </>
  )
}

export default Tejas