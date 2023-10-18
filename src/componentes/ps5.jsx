import React from 'react';
import ps5 from "../imagenes/ps5.jpg";
import { BsShopWindow } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';

function Ps5() {
  return(
    <div className="row">
      <div className="container">
        <div className="pt-3">
          <h1 className="encabezado text fw-bold">Playstation 5</h1>
           <img
              src={ps5}
              className="card-img-top"
              alt="Course 1"
              style={{border:'1px solid #000000'}}
            />
          <h4 className="pt-3" style={{color:'#ffff'}}><strong>$499</strong></h4><p style={{color:'#ffff'}}><BsShopWindow className="pb-1"/> <strong>Vendedor:</strong> Elpho jhon</p>
          <hr style={{color:'#ffff'}}/>
          <p style={{color:'#ffff'}}><strong>Especificaciones técnicas
</strong></p>
          <ul style={{color:'#ffff'}}>
            <li>CPU: x86-64-AMD Ryzen Zen de 8 Núcles / 16 Hilos a 3.5GHz (frecuencia variable)
</li>
            <li>GPU: AMD RDNA 2 con 10,28 TFLOPs, 36 CUs a 2,23 GHz (frecuencia variable) con Ray Tracing.
</li>
            <li>RAM: 16 GB GDDR6/256-bit 448 GB/s.
</li>
            <li>Unidad óptica: 4K UHD Blu-ray.
</li>
            <li>Almacenamiento interno: Disco duro SSD de 825 GB.
</li>
          </ul>
          <hr style={{color:'#ffff'}}/>
          
          <Link to="#" className="btn btn-primary" style={{backgroundColor:'transparent', border:'1px solid #ffff', position:'relative', left:'10px'}}><GiShoppingCart/> Añadir al carrito</Link>
        </div>
      </div>
    </div>
    
  );
}
export default Ps5; 