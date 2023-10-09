import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={oncClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={complateTodos} oncClickBack={oncClickBack} />
    </>
  );
}
