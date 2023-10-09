import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    /* padding:内側の余白 */
    padding: "8px",
    /* padding:外側の余白 */
    margin: "8px",
    /* border-radius: 角を丸くする */
    borderRadius: "8px",
  };

  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;

  return (
    <div style={style}>
      <input
        placeholder="todoを入力"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
