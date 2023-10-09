import React from "react";

export const CompleteTodos = (props) => {
  const { todos, oncClickBack } = props;
  return (
    <div className="complete_area">
      <p className="title">完了したtodo</p>
      <ul id="complete_list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list_row">
                <p className="list_content">{todo}</p>
                <button onClick={() => oncClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
