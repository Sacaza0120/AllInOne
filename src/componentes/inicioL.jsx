import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/estilos.css';
import elbichooosiuu from '../imagenes/elbichooosiuu.jpg';
import ps5 from '../imagenes/ps5.jpg';
import nokia3310 from '../imagenes/nokia3310.jpg';
import raton from '../imagenes/raton.png';
import {IoLogoPlaystation} from 'react-icons/io';

function InicioL() {
  return(
    <div className="container pt-5" style={{backgroundColor:'#F2E4C'}}>
      <div className="row mx-auto">
        <div className="text-center mx-auto">
          <h2 className="encabezado">Productos mejor valorados</h2>
      </div>
        </div>

      <div className="container px-5">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              
              <div className="card">
                <img src={ps5} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"><IoLogoPlaystation/> Playstation 5</h5><hr/>
                  <p className="card-text">Consola De nueva generacion que cuenta con calidad 4K y 120fps en cualquier juego.</p><hr/>
                  <div className="row pb-3">
                    <div className="col" style={{borderRight:'1px solid #C0B8B8'}}><p><small>De primera mano</small></p></div>
                    <div className="col" style={{borderRight:'1px solid #C0B8B8'}}><p><small>Usuario verificado</small></p></div>
                    <div className="col"><p><small>Envio en menos de 5 dias</small></p></div>
                  </div>
                  <Link href="#" className="btn btn-primary">Vista previa</Link>
                </div>
              </div>
                
            </div>
            <div className="carousel-item">
              
              <div className="card">
                <img src={nokia3310} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Nokia3310</h5>
                  <p className="card-text">Celular nueva generacion y uno de los mas innovadores del mercado.</p>
                  <div className="row pb-3">
                    <div className="col" style={{borderRight:'1px solid #C0B8B8'}}><p><small>De primera mano</small></p></div>
                    <div className="col" style={{borderRight:'1px solid #C0B8B8'}}><p><small>Usuario verificado</small></p></div>
                    <div className="col"><p><small>Envio en menos de 5 dias</small></p></div>
                  </div>
                  <Link href="#" className="btn btn-primary">Vista previa</Link>
                </div>
              </div>
                
            </div>
            <div className="carousel-item">
              
              <div className="card">
                <img src={raton} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Raton gayming </h5>
                  <p className="card-text">Raton en perfecto estado (aunque no parezca) perfecto para meter heads en el counter.</p>
                  <div className="row pb-3">
                    <div className="col" style={{borderRight:'1px solid #C0B8B8'}}><p><small>De primera mano</small></p></div>
                    <div className="col" style={{borderRight:'1px solid #C0B8B8'}}><p><small>Usuario verificado</small></p></div>
                    <div className="col"><p><small>Envio en menos de 5 dias</small></p></div>
                  </div>
                  <Link href="#" className="btn btn-primary">Vista previa</Link>
                </div>
              </div>
            </div>
            </div>

          
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="container">
            <h2 className="encabezado text-center mx-auto pt-3">¿Quieres vender algo?</h2>
          </div>
        <div style={{ margin: 'auto', width: 'fit-content'}}>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Empieza a vender aqui
          </button>
        </div>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Terminos y condiciones</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años, era de complexión recia, seco de carnes, enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosímiles, se deja entender que se llamaba Quejana. Pero esto importa poco a nuestro cuento; basta que en la narración dél no se salga un punto de la verdad.

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" className="btn btn-primary">Aceptar condiciones</button>
                </div>
              </div>
            </div>
          </div>
        
      </div>

      

        </div>  

    
    
  );
}
export default InicioL;