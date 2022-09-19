import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoInput } from "./todoin";
import "./todo.css";
import Lottie from 'react-lottie'
import pencil from './pencil.json'
import { useSelector } from "react-redux";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const {isauth} = useSelector((store)=>store.login)
  console.log(isauth)
  const [todo, setTodo] = useState("");
  const [isedit, setisedit] = useState(false);
  const [edit_id, setedit_id] = useState(0);
  const penciloption = {
    loop : true,
    autoplay : true,
    animationData: pencil,
    rendererSettings:{
        preserverAspectRatio:"xMidYMid slice"
    }
}
  const getTodo = (data) => {
    if (isedit) {
      if (edit_id) {
        const editTodo = todos.find((e) => e.id == edit_id);
        const updatedTodos = todos.map((e) =>
          e.id === editTodo.id
            ? (e = { id: e.id, todo: data })
            : { id: e.id, todo: e.todo }
        );
        setTodos(updatedTodos);
        setTodo("");
        setisedit(!isedit);
        setedit_id(0);
        return;
      }
    }
    let payload = {
      id: nanoid(4),
      todo: data,
      iscompleted: false,
    };
    setTodos([...todos, payload]);
    setTodo("");
  };

  const Toggle = (id) => {
    setTodos(
      todos.map((e) => {
        if (e.id == id) {
          return { ...e, iscompleted: !e.iscompleted };
        }
        return e;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const edit = (id) => {
    const edit_todo = todos.find((e) => e.id == id);
    setedit_id(edit_todo.id);
    setTodo(edit_todo.todo);
    setisedit(!isedit);
  };

  return (
    <div className="container">
      <TodoInput
        todo={todo}
        isedit={isedit}
        setTodo={setTodo}
        getTodo={getTodo}
      ></TodoInput>
      <div className="todo-map-div">
        {todos.length !== 0 ? (
          <div className="todo-main-div">
            {todos.map((e) => (
              <div className="every-todo-div" key={e.id}>
                <div className="txt-div">
                <p className={e.iscompleted ? "todo-txt" : ""}><li><span className="black-span">{e.todo}</span></li></p>
                </div>
                <div>
                <button
                className="b3-btn"
                  onClick={() => {
                    deleteTodo(e.id);
                  }}
                >
                  Delete
                </button>

                <button
                className="b3-btn"
                  onClick={() => {
                    Toggle(e.id);
                  }}
                >
                  Toggle
                </button>
                <button
                className="b3-btn"
                  onClick={() => {
                    edit(e.id);
                  }}
                >
                  Edit
                </button>
                </div>

              
              </div>
            ))}
          </div>
        ) : <Lottie options={penciloption} height={500} width={400}></Lottie>}
      </div>
    </div>
  );
};
