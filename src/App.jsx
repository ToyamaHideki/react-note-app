import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import uuid from "react-uuid";

function App() {

  // 複数のノートを配列として格納
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  // 選択されたオブジェクトのIDを保持する。
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
  // リロードした時最初のデータにフォーカスを当てる
  // 配列が空の場合にエラーが吐かれるためIFで回避
    setActiveNote(notes.length === 0 ? false : notes[0].id);
  },[]);




  useEffect(() => {
    // 第二引数のNotesに更新があった場合にローカルストレージに保存を加える
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);


  /*****************************************
   *        ノートを追加する処理
   *****************************************/
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title:"",
      content:"",
      modDate: Date.now(),
      state: false,
    };

    setNotes([...notes, newNote]);
  };

  /*****************************************
   *        ノートを削除する処理
   *****************************************/
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

    /*****************************************
   *        アクティブな情報を取り出す　          *
   *******************************************/
  const getActiveNote = () =>{
      return notes.find((note) => note.id === activeNote);
  }

    /*****************************************
   *       　　　データの更新を行う 　　          *
   *******************************************/
  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノート配列を返す。
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id){
        // 更新したデータのみ新しい内容で保存する
          return updatedNote;
      }else{
        // 更新していないデータはそのまま返す。
        return note;
      }
     
    });
    console.log(updatedNotesArray);


    // 更新したデータを格納する。
    setNotes(updatedNotesArray);
  }

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onUpdateNote={onUpdateNote}
      />
      {/* 情報を一つ抽出して受けわたす際に発火させる必要あり。 */}
      <Main activeNote={getActiveNote()}
            onUpdateNote={onUpdateNote}
            
      />
    </div>
  );
}

export default App;
