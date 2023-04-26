import Image from 'next/image'
import React from 'react'
import Logo from "../../assets/logosolo.png"

const instagram = <svg height={50} width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="instagram"><defs><linearGradient id="a" x1="-1.84" x2="32.16" y1="30.47" y2="-3.03" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed576"></stop><stop offset=".26" stop-color="#f47133"></stop><stop offset=".61" stop-color="#bc3081"></stop><stop offset="1" stop-color="#4c63d2"></stop></linearGradient></defs><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="url(#a)" rx="6.48" ry="6.48"></rect><g data-name="<Group>"><path fill="#fff" d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z" data-name="<Compound Path>"></path><path fill="#fff" d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z" data-name="<Compound Path>"></path><path fill="#fff" d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z" data-name="<Path>"></path></g></g></g></svg>

const twitter = <svg height={50} width={50} xmlns="http://www.w3.org/2000/svg" viewBox="126.444 2.281 589 589" id="twitter"><circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"></circle><path fill="#fff" d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"></path></svg>

const facebook = <svg height={50} width={50} xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024" id="facebook-logo-2019"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>

export const Footer = () => {
  return (
    <div className='w-full flex justify-around items-center text-center mt-4 bg-RosaMaia mobile:flex-col gap-4 tablet:flex-row p-3'>
        <div>
            <Image src={Logo} alt="Logo Maia Martinez"/>
        </div>
        <div className='mobile:w-[80%] tablet:w-[40%]'>

        <a href="https://portfolio-react-lucianocabelloo.vercel.app/"><h4 className=' text-white font-semibold text-base'>Todos los derechos reservados a <span className='  text-black'> Elece Development</span>  </h4></a>
        </div>
        <div className='text-center'>
            <h3>Seguinos en las redes sociales</h3>
            <ul className='flex justify-center  text-sm flex-row gap-4'>
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

export default Footer