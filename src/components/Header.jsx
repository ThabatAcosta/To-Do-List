import React from 'react'


const Header = ({handleCompletedTasks, handleTasks, handleIcompletedTasks}) => {


    return (
        <header className=' bg-purple-900  w-full  flex flex-col items-center justify-center space-y-5 font-serif font-medium ' >

            <h1  className=' text-center text-6xl'>¡ToDo!</h1>

            <div className=' flex flex-row space-x-10 '>
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
        <button type="button" onClick={handleClick} className=' bg-green-500 rounded font-serif font-normal mx-1.5 p-2 mb-3 '>{title} </button>
        </>


    )
}



export default Header
