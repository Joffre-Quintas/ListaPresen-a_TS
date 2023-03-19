import './App.css'
import { BaseSyntheticEvent, useState } from 'react'
import { Tasks, Task } from './components/Tasks'


function App() {

  const [arrayTasks, setArrayTasks] = useState([])

  function handleRegister() {
    const inputElement = document.querySelector('.inputTask') as HTMLInputElement;
    let inputValue: string = inputElement.value;
    
    if (inputValue) {
      const umaPessoa:Task = {
         work: inputValue,
         time: new Date().toLocaleTimeString()
      }
      setArrayTasks([...arrayTasks, umaPessoa])
      inputValue = ''
      console.log(arrayTasks)
    }else{
      alert('Preencha o campo antes de definir uma tarefa')
    }
  }
  //Função para registrar o valor do input pela tecla "Enter"
  function enterPress(event:any){
    console.log(event.key)
    if(event.key == 'Enter') {
      handleRegister
      console.log(arrayTasks)
    }
  }
  //Fim da função
  return (
    <div className="container">
      <div>
        <h2>Registro de Pessoas</h2>
        <div className='registerCamp'>
          <input className='inputTask' type="text" onKeyDown={enterPress}/>
          <button className='btnRegister' onClick={handleRegister}>Registrar</button>
        </div>
      </div>
      <hr />
      <div>
        <h2>Lista de Presença</h2>
        {arrayTasks.map((task,index) => {
          return <Tasks key={index} work={task.work} time={task.time} />
        })}
      </div>
    </div>
  )
}

export default App
