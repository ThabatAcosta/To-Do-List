import React from 'react'

const Card = ({title, completed, id, handleClick}) => {

    return (
        <div className=' w-11/12 bg-purple-500 flex flex-col  p-2 border-purple-100 border-4 rounded-xl justify-around  items-center space-y-2  ' style={ {minHeight:'10rem' } }>
             {/* <div className=' container mx-auto w-full h-1/3 bg-purple-500 flex flex-row  '></div> */}
          
                <h3 className=' text-lg text-black text-center capitalize w-full'>{title}</h3>
                <button type="button" onClick={() => handleClick(id, completed)} className={`font-extrabold ${completed? 'bg-pink-400' : 'bg-yellow-300'} rounded font-serif font-normal p-2 w-full `} >{ completed ? 'Completa' : 'Imcompleta'}</button>
          
        </div>

    )
}

export default Card
