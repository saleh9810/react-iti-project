import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/actions";

import './Todo.css'
import TodoForm from "./TodoForm";

const TodoList = () => {
    const todos = useSelector((state) => state.todoReducer.todos);

    const  dispatch = useDispatch();

    const removetodo = (item) => {
        dispatch(removeTodo(item))
    }
   

    console.log(todos);
    const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul  key={i}>
            <li className="border">
            <div className="mr-3">
            <button className="remove  btn btn-danger" onClick={() => removetodo(todo.title)}>x</button>
              <h4>Title : {todo.title}</h4>
              <h4>Content : {todo.content}</h4>
            </div>
            </li>
          </ul>
          
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );
    return (
      <div className=" mt-5 container">
          <TodoForm />
        <h5 className="mx-5">{todosList}</h5>
      </div>
    );
  };
  
  export default TodoList;