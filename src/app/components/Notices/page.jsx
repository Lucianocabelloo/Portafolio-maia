'use client'

import React from 'react'
import video from "../../assets/Video1.mp4"
import video2 from "../../assets/Video2.mp4"
import video3 from "../../assets/Video3.mp4"
import video4 from "../../assets/Video4.mp4"






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
         allowFullScreen={true}
         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
         ></iframe>
        </div>

        </div>
    
  );
}

export default Notices