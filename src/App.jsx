import { useState } from "react";
import "./styles.css";

export default function App() {
  //タスクの追加
  const [todoText, setTodo] = useState("");

  //未完了のタスクに移動
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  //完了のタスクに移動
  const [complateTodos, setComplateTodos] = useState([]);

  //テキストボックスの入力値が変更される度、値をテキストボックスに再反映し、todoTextとして取得する
  //event(名前は何でもいいけど)…inputの変数がonChangeで変更があったときに入る
  //変更された際入る値はevent.target.valueで取得できる
  const onChangeTodoText = (event) => setTodo(event.target.value);
  //console.log(todoText);

  //タスクの追加…取得したtodoTextを未完了リストに追加する
  const oncClickAdd = () => {
    //テキストボックスが空欄の時何もしない…処理が一行で終わるとき、ブラケット省略可能
    if (todoText === "") return;

    // 未完了リストの今保持しているすべてのtodoの値（スプレッド構文）、最後にinputで入力した新しいtodoの値を指定
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);

    //テキストボックスの初期化
    setTodo("");
  };

  //タスクの削除
  const onClickDelete = (index) => {
    //alert("削除" + index + "番目");

    const newTodos = [...incompleteTodos];
    //指定位置(index)より1つ配列を削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //タスクの完了
  const onClickComplete = (index) => {
    //未完了リストからタスクを削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    //完了リストへタスクを追加
    //削除対象になったtodoの値を追加する
    const newCompleteTodos = [...complateTodos, incompleteTodos[index]];
    setComplateTodos(newCompleteTodos);
  };

  //完了リストから未完了リストにタスクを戻す
  const oncClickBack = (index) => {
    //完了リストからタスクを削除する
    const newCompleteTodos = [...complateTodos];
    newCompleteTodos.splice(index, 1);
    setComplateTodos(newCompleteTodos);

    //未完了リストにタスクを追加する
    const newIncompleteTodos = [...incompleteTodos, complateTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input_area">
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={oncClickAdd}>追加</button>
      </div>

      <div className="incomplete_area">
        <p className="title">未完了のtodo</p>
        <ul id="incomplete_list">
          {/* (map, index)…第二引数のindexの部分で何番目のtodoかを取得 */}
          {incompleteTodos.map((todo, index) => {
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

      <div className="complete_area">
        <p className="title">完了したtodo</p>
        <ul id="complete_list">
          {complateTodos.map((todo, index) => {
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
    </>
  );
}