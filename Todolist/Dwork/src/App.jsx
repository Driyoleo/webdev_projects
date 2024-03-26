/* eslint-disable no-unused-vars */
import Navbar from './components/navbar'
// import Task from './components/task'
import './App.css'
import { useState ,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [comp, setcomp] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      settodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  function handlechange(e) {
    settodo(e.target.value)
  }
  function handleclick() {
    if (todo != "") {
      settodos([...todos, { id: uuidv4(), todo: todo, isCompleted: false }])
      settodo("")
    }
    saveToLS()
  }
  function handledone(e){
    let id = e.target.value;  
    let index = todos.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todos];
    console.log(newTodos)
    console.log(index)
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)
    saveToLS()
  }

  function handledelete(e) {
    let id = e.target.id.slice(0,-1)
    let newtodos = todos.filter((items)=>{
      return items.id != id
    })
    settodos(newtodos)
    saveToLS()
    }

  function handledit(e){
    let id = e.target.id.slice(0,-1)
    let tod =document.getElementById(`${id+"p"}`).innerText
    console.log(tod)
    handledelete(e)
    settodo(tod)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <main className=' relative flex justify-center'>
        <div className=' w-full flex items-center flex-col absolute -top-20'>
          <div className="adder w-1/2 bg-white h-32 rounded-3xl flex items-center px-10 ">
            <input id='adder' type="text" value={todo} onChange={handlechange} placeholder='task' className=' w-9/12 border-purple-400 mr-8 h-10 p-4 rounded-2xl to-black' />
            <button onClick={handleclick} className=' bg-purple-400 h-10 w-28 rounded-2xl hover:bg-purple-900 hover:text-white'>Add it !</button>
          </div>
          <div className="tasks w-1/2 bg-white h-96 mt-5 rounded-3xl p-5">
            {/* <Task t="drink water"/> */}
            {todos.map(tod => {
              return (
                <div key={tod.id} id={tod.id+"w"}  className=' flex bg-purple-950 rounded-xl px-6 items-center min-h-10 justify-between mb-2'>
                  <div className=' text-white flex max-w-96'>
                    <input type="checkbox"  value={tod.id} onChange={handledone} checked={tod.isCompleted? true: false} className=' mr-2 mt-1 ' />
                    <p id={tod.id+"p"} className={tod.isCompleted?" line-through max-w-96 py-3" : "max-w-96 py-3"}>{tod.todo}</p>
                  </div>
                  <div className=' sm:flex sm:flex-col sm:items-center my-1 md:flex md:flex-row'>
                    <button id={tod.id+"e"} className=' edit bg-white px-3 rounded-lg mr-2 sm:mb-1' onClick={handledit}>edit</button>
                    <button id={tod.id+"c"} className=' cancel bg-white px-3 rounded-lg ' onClick={handledelete}>Cancel</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

