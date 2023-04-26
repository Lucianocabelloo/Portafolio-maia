'use client'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Galeria1 from "../../assets/Galeria1.jpg"
import Galeria2 from "../../assets/Galeria2.jpg"
import Galeria3 from "../../assets/Galeria3.jpg"
import Galeria4 from "../../assets/Galeria4.jpg"
import Galeria5 from "../../assets/Galeria5.jpg"
import Galeria6 from "../../assets/Galeria6.jpg"





const page = () => {
  return (
  <div className="">
    <h2 id='Gallery' className=' text-center m-5'>Galeria de Fotos</h2>
     <Carousel
     autoPlay={true}
     showArrows={true}
     showThumbs={false}
     infiniteLoop={true}
     stopOnHover={true} >
                <div className=' h-full'>
                    <Image className='' src={Galeria1} alt="Hola" />
                    <p className="legend text-lg">Maia visita a escuela de burruyacu donde entrego artefactos para el confort de los alumnos</p>
                </div>
                <div className=' h-full'>
                    <Image className=''  src={Galeria2} alt="Hola" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className=' h-full'>
                    <Image className='' src={Galeria3} alt="Hola" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className=' h-full'>
                    <Image className='' src={Galeria4} alt="Hola" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className=' h-full'>
                    <Image className='' src={Galeria5} alt="Hola" />
                    <p className="legend">Legend 1</p>
                </div >
                <div className=' h-full'>
                    <Image className='' src={Galeria6} alt="Hola" />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
  </div>
  )
}

export default page