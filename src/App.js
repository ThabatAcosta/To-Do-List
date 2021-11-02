
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';


function App() {
// estados para array 
  const [tasks, setTasks] = useState([])
  const [filterCompleted, setFilterCompleted] = useState([])
  const [filterInCompleted, setFilterInCompleted] = useState([])
  // estados para los botones
  const [isCompleted, setIsCompleted] = useState(false)
  const [isInCompleted, setIsInCompleted] = useState(false)
  const [isTasks, setIsTasks] = useState(false)

  //Funcion para llamar la api
  const getTodo = async() => {

    const url = `https://jsonplaceholder.typicode.com/todos`;
    const resp = await fetch(url); 
    const r = await resp.json();
    const resultTodoList = r.slice(0, 20);

    return resultTodoList
  } 


  //Funcion para filtrar los estados
  const getFilter = (array, boolean) => {
    return array.filter(elem => elem.completed === boolean)
   }


//Se ejecuta cuando solo al abrir la app []
  useEffect(() => {
//Llamo a la api espero la respuesta y seteo el valor
    getTodo().then( res =>{
      setTasks(res)
// filtro por completadas he incompletas 
   const fCompleted = getFilter(res, true)
    setFilterCompleted(fCompleted)
   const fInCompleted = getFilter(res, false)
    setFilterInCompleted(fInCompleted)
    })
  }, [])

 


//Funciones de click para mi button 
  const handleCompletedTasks = () => {
    setIsCompleted(true)
    setIsInCompleted(false)
    setIsTasks(false)
}

const handleIcompletedTasks = () => {
    setIsInCompleted(true) 
    setIsCompleted(false)
    setIsTasks(false)
}

const handleTasks = () => {
    setIsTasks(true)
    setIsCompleted(false)
    setIsInCompleted(false)
}


const handleClickCard = (id, completed ) => {
 const tasksNew =  tasks.map(task => {
    if(task.id === id){
     task.completed = !completed
    }
    return task
  })
    setTasks(tasksNew)
    // filtro por completadas he incompletas 
   const fCompleted = getFilter(tasksNew, true)
   setFilterCompleted(fCompleted)
  const fInCompleted = getFilter(tasksNew, false)
   setFilterInCompleted(fInCompleted)

   return 

}





//return de todo el componente
  return (
    <div className=" w-full h-screen space-y-3 bg-gradient-to-r from-green-600 via-green-400 to-green-600" >

      <Header 
         handleCompletedTasks={handleCompletedTasks}   
         handleIcompletedTasks={handleIcompletedTasks} 
         handleTasks={handleTasks}
      />

      {/* Condicional para mostrar la card, luego del evento onclick  */}

    <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 pl-6 bg-gradient-to-r from-green-600 via-green-400 to-green-600'>

      {isCompleted && <>
        { 
         filterCompleted.map((todo, i) => (
            <Card key={todo} 
                  {...todo}
                  handleClick={handleClickCard}/>
            ))
        }  
        </>}


      {isInCompleted && <>
        {
        filterInCompleted.map((todo, i) => (
          <Card key={todo} 
                  {...todo}
                  handleClick={handleClickCard}/>
            ))
        
        }
        </>}
      
      
      {isTasks && <>
        { 
         tasks.length > 1 && 
         tasks.map((todo, i) => (
            <Card key={todo} 
                  {...todo}
                  handleClick={handleClickCard}/>
            ))
        }  
        
    
        </>}




    </div>
  </div>
  )
}

export default App;
