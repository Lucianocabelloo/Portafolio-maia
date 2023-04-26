import React from 'react'
import video from "../../assets/Video1.mp4"
import video2 from "../../assets/Video2.mp4"
import video3 from "../../assets/Video3.mp4"
import video4 from "../../assets/Video4.mp4"




const notices = [
  {
    title: ' Fomentar el deporte es importante en mi gestión.',
    message: '🟣 Hoy me reuní con la candidata a Comisionada Comunal de Santa Rosa de Leales Viviana Villareal a quien le hice entrega de un juego de camisetas para el equipo de fútbol Veteranos de Santa Rosa..',
    message2: "Convencidas de que una renovación es posible, estamos trabajando para conseguirla.",
    date: "24/04/2023",
    url: "https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/342789343_493034256259788_1175339040964768698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Xl1yD-NlRfUAX8xObMs&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfBroaQDsv8JqQeSKb0rx8lll2mOTEU6D8qVL-PS6ieOvw&oe=644C80C8"
  },
  {
    title: ' Fomentar el deporte es importante en mi gestión.',
    message: '🟣 Hoy me reuní con la candidata a Comisionada Comunal de Santa Rosa de Leales Viviana Villareal a quien le hice entrega de un juego de camisetas para el equipo de fútbol Veteranos de Santa Rosa..',
    message2: "Convencidas de que una renovación es posible, estamos trabajando para conseguirla.",
    date: "24/04/2023",
    url: "https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/342789343_493034256259788_1175339040964768698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Xl1yD-NlRfUAX8xObMs&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfBroaQDsv8JqQeSKb0rx8lll2mOTEU6D8qVL-PS6ieOvw&oe=644C80C8"
  },
  {
    title: ' Fomentar el deporte es importante en mi gestión.',
    message: '🟣 Hoy me reuní con la candidata a Comisionada Comunal de Santa Rosa de Leales Viviana Villareal a quien le hice entrega de un juego de camisetas para el equipo de fútbol Veteranos de Santa Rosa..',
    message2: "Convencidas de que una renovación es posible, estamos trabajando para conseguirla.",
    date: "24/04/2023",
    url: "https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/342789343_493034256259788_1175339040964768698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Xl1yD-NlRfUAX8xObMs&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfBroaQDsv8JqQeSKb0rx8lll2mOTEU6D8qVL-PS6ieOvw&oe=644C80C8"
  },
  {
    title: ' Fomentar el deporte es importante en mi gestión.',
    message: '🟣 Hoy me reuní con la candidata a Comisionada Comunal de Santa Rosa de Leales Viviana Villareal a quien le hice entrega de un juego de camisetas para el equipo de fútbol Veteranos de Santa Rosa..',
    message2: "Convencidas de que una renovación es posible, estamos trabajando para conseguirla.",
    date: "24/04/2023",
    url: "https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/342789343_493034256259788_1175339040964768698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Xl1yD-NlRfUAX8xObMs&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfBroaQDsv8JqQeSKb0rx8lll2mOTEU6D8qVL-PS6ieOvw&oe=644C80C8"
  },
]


const Notices = () => {

  return (
    <div id='Notices' className='flex w-full mt-4  mobile:flex-col tablet:flex-row'>

        <div className='w-full'>
          <div id='MediaZone' className='p-3 w-full flex flex-col gap-6'>
            <div>
          <video className='w-full' src={video3} controls /> 
            </div>
            <div>
          <video className='w-full' src={video} controls />  
            </div>
            <div>
          <video className='w-full' src={video2} controls />  
            </div>
            <div>
          <video className='w-full' src={video4} controls />  
            </div>
          </div>
        </div>
        <div id='TwitterZone' className='mobile:w-full tablet:w-[60%] desktop:w-full flex mobile:justify-center tablet:justify-end'>
        <iframe className='tablet:w-[full] desktop:w-[60%] mobile:w-[350px]' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flegisladoramaia&tabs=timeline&width=324&height=1200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=566789815545219"
         width="324" 
         height="800" 
         scrolling="yes" 
         frameborder="0" 
         allowfullscreen="true" 
         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
         ></iframe>
        </div>

        </div>
    
  );
}

export default Notices