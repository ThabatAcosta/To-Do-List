import React from 'react'

const Card = ({title, completed, id, handleClick}) => {

    return (
        <div className=' w-11/12 bg-white flex flex-col  p-2 border-gray-500 border-2 rounded-xl justify-around  items-center space-y-2  ' style={ {minHeight:'10rem' } }>
          
                <h3 className=' text-lg text-black text-center capitalize w-full'>{title}</h3>
                <button type="button" onClick={() => handleClick(id, completed)} className={`font-extrabold ${completed? ' bg-black' : ' bg-gray-500'} rounded font-serif font-normal p-2 w-full text-white`} >{ completed ? 'Completa' : 'Incompleta'}</button>
          
        </div>

    )
}

export default Card
