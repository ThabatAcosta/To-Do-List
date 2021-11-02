import React from 'react'


const Header = ({handleCompletedTasks, handleTasks, handleIcompletedTasks}) => {


    return (
        <header className=' bg-gradient-to-r from-green-200 via-green-400 to-green-200 w-full  flex flex-col items-center justify-center space-y-5 font-serif font-medium py-2' >

            <h1  className=' text-center text-6xl font-medium'>¡ToDo!</h1>

            <div className=' flex flex-row space-x-10'>
               <Button title='Completadas' handleClick={handleCompletedTasks}/>
               <Button title='Todas' handleClick={handleTasks}/>
               <Button title='Incompletas' handleClick={handleIcompletedTasks}/>
            </div>

        </header>
    )
}


const Button = ({handleClick=()=>{} , title=''}) => {

    return(

        <>
        <button type="button" onClick={handleClick} className=' bg-green-100 rounded font-serif font-normal p-3 border-gray-500 border-2 shadow-xl'>{title} </button>
        </>


    )
}



export default Header
