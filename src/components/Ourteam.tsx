
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'


import boardMembers from '@/data/BoardMembres'

interface Props{
    name:String,
    role:String,
    img:StaticImageData,
    linkedin:string
}


const Card=({name,role,img,linkedin}:Props)=>{
    return(
        <div className='w-[220px] h-[500px] m-2 ' >
               <div className='  flex flex-col items-center justify-center gap-12  '>
             <div className={`card flex   items-center justify-center relative
             `}>
                
                
                <Image src={img} alt='boardmembers' height={220} width={220} className='rounded-[45px]'/>

                <Link href={linkedin} target='_blank'>
                <Image src='/Pasted Graphic 3.png' alt='linkedin' width={60} height={60} className='absolute right-0 bottom-0 ml-10'/>

                </Link>
            
            
            </div>
            <div className='flex flex-col items-center justify-center  mt-5 gap-3 px-1 '>
            <h1 className='text-white  text-2xl tracking-wide text-center  '>{name}</h1>
            <p className='text-white  text-xl font-light tracking-wide text-center'>{role}</p>
            
            
            </div>
           
        </div>

        </div>
     
       
    )
}


const Ourteam = () => {
  return (

    
        
          <div className= 'w-full h-auto bg-printedGraphic  '   >
            <h1 className='text-white text-center text-5xl font-bold p-10 '>Our Team</h1>
            <div className='flex flex-wrap gap-10 items-center justify-center me-12 my-15 pb-12 ml-10 '>
          
            {
                boardMembers.map((e)=>(
                    <Card name={e.name} role={e.role} img={e.image} key={e.name} linkedin={e.linkedIn}/>
                ))
            }

            </div>
      
    </div>
    
  
  )
}

export default Ourteam
