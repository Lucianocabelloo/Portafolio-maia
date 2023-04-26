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
    <h2 id='Gallery' className=' text-center m-5 text-[2rem] font-bold text-RosaMaia shadow'>Galeria de Fotos</h2>
     <Carousel
     autoPlay={true}
     showArrows={true}
     showThumbs={false}
     infiniteLoop={true}
     stopOnHover={true} >
                <div className=' h-full'>
                    <Image className='' src={Galeria1} height="auto" width="auto" alt="Maia visita a escuela de burruyacu donde entrego artefactos para el confort de los alumnos" />
                    <p className="legend text-lg">Maia visita a escuela de burruyacu donde entrego artefactos para el confort de los alumnos</p>
                </div>
                <div className=' h-full'>
                    <Image className=''  src={Galeria2}  height="auto" width="auto" alt="Maia junto con alumnas de la Escuela N° 34" />
                    <p className="legend">Maia junto con alumnas de la Escuela N° 34</p>
                </div>
                <div className=' h-full'>
                    <Image className='' src={Galeria3} height="auto" width="auto" alt="Maia junto con otros candidatos de el espacio politico apoyando a Bernarda Diaz y Alejandro Moreno candidatos a delegada y subdelegada de San Pedro de Colalao" />
                    <p className="legend">Maia junto con otros candidatos de el espacio politico apoyando a Bernarda Diaz y Alejandro Moreno candidatos a delegada y subdelegada de San Pedro de Colalao</p>
                </div>
                <div className=' h-full'>
                    <Image className='' src={Galeria4} height="auto" width="auto" alt="Largada simbólica de la Segunda fecha del Rally Tucumano" />
                    <p className="legend">Largada simbólica de la Segunda fecha del Rally Tucumano.</p>
                </div>
                <div className=' h-full'>
                    <Image className='' src={Galeria5} height="auto" width="auto" alt="Largada simbólica de la Segunda fecha del Rally Tucumano" />
                    <p className="legend">Largada simbólica de la Segunda fecha del Rally Tucumano.1</p>
                </div >
                <div className=' h-full'>
                    <Image className='' src={Galeria6} height="auto" width="auto" alt="Largada simbólica de la Segunda fecha del Rally Tucumano" />
                    <p className="legend">Largada simbólica de la Segunda fecha del Rally Tucumano.</p>
                </div>
            </Carousel>
  </div>
  )
}

export default page