import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete_area">
      <p className="title">未完了のtodo</p>
      <ul id="incomplete_list">
        {/* (map, index)…第二引数のindexの部分で何番目のtodoかを取得 */}
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list_row">
                <p className="list_content">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数を渡し、onClick={onClickDelete(index)}にしてしまうと
                  ボタンが押されていないのに関数が実行されてしまう
                  引数を渡したいときはアロー関数で新しく関数を生成し、使用したい関数を中で実行する */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
