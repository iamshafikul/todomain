import {useDispatch, useSelector} from 'react-redux'
import {useState }from 'react'
import {addTodo, deleteTodo} from '../redux/action/action'

const index = () => {
  const [inputData, setInputData] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  console.log(inputData);
  const list = useSelector((state)=>state.todoReducer.list);
  console.log(list);
  const dispatch = useDispatch();
  return (
    <>
     <div className = "container">
       <h1 className = "topTitle">TODO LIST</h1>
       <div className = "inputContainer">
         <input type = "text" placeholder = "title" className = "title" onChange = {(e)=>setInputData(e.target.value)}/>
         <input type = "text" placeholder = "description" className = "desc" onChange = {(e)=>setInputDesc(e.target.value)}/>
       </div>
       <button className = "add" onClick = {()=>dispatch(addTodo(inputData, inputDesc))}>ADD</button>
       <div className = "cardContainer">
         {list.map((e)=>(
           <div className = "card">
           <button onClick = {()=>dispatch(deleteTodo(e.id))}>Delete</button>
           <h1 className = "mainTitle">{e.title}</h1>
           <p className = "mainDesc">{e.desc}</p>
         
       </div>
         ))}
         
       </div>
     </div>
    </>
  )
}

export default index
