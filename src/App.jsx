import { useState } from "react";
import "./styles.css";

export default function App() {
  //未完了のタスクを追加
  const [incompleteTodos, setIncompleteTodos] = useState(["task1", "task2"]);

  //完了のタスクを追加
  const [complateTodos, setComplateTodos] = useState(["task3"]);

  return (
    <>
      <div className="input_area">
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete_area">
        <p className="title">未完了のtodo</p>
        <ul id="incomplete_list">
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="list_content">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete_area">
        <p className="title">完了したtodo</p>
        <ul id="complete_list">
          {complateTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="list_content">{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
