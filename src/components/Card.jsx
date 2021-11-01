import React from 'react'

const Card = ({title, completed, id, handleClick}) => {

    return (
        <div className='w-full bg-purple-500 flex flex-row'>
             {/* <div className=' container mx-auto w-full h-1/3 bg-purple-500 flex flex-row  '></div> */}
            <div  className=' flex flex-col space-x-10 m-3 p-3 border-purple-100 border-4 rounded-xl'>
                <h3 className=' text-lg text-black text-center'>{title}</h3>
                <button type="button" onClick={() => handleClick(id, completed)} className={`font-extrabold ${completed? 'bg-pink-400' : 'bg-yellow-300'} rounded font-serif font-normal `} >{ completed ? 'Completa' : 'Imcompleta'}</button>
            </div>  
        </div>

    )
}

export default Card
