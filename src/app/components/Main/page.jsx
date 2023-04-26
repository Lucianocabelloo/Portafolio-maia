import Image from 'next/image'
import React from 'react'
import Maia1 from "../../assets/Maia1.jpg"
import { instagram, twitter,facebook } from '../Footer/page'

const Main = () => {
  return (
    <div id='#Inicio' className='HeroBanner flex items-center bg-white w-full  gap-10 desktop:text-left mobile:flex-col mobile:text-center mobile:gap-5 laptop:flex-row desktop: justify-evenly'>
        <div>

        </div>
        <Image height={500} width={500} src={Maia1} alt="Foto de la Legisladora Maia Martinez"/>
        <div className='flex flex-col gap-3 justify-center items-center desktop:items-start'>
        <h2 className='text-4xl max-w-md font-bold tracking-tight text-zinc-800 sm:text-5xl'>Legisladora por la Sección Este de Tucumán.</h2>
            <ul className='flex justify-center  text-sm flex-row gap-4 '>
                <li>
                   <a target={'_blank'} href="https://www.facebook.com/legisladoramaia/">{facebook}</a>
                </li>
                <li>
                    <a target={'_blank'} href="https://www.instagram.com/maiamartinezok/">{instagram}</a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com/MaiaMartinezok">{twitter} </a>
                </li>
            </ul>

        </div>
        </div>
  )
}

export default Main