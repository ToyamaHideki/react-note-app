import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import uuid from "react-uuid";

function App() {

  // 複数のノートを配列として格納
  const [notes, setNotes] = useState([]);
  // 選択されたオブジェクトのIDを保持する。
  const [activeNote, setActiveNote] = useState(false);


  /*****************************************
   *        ノートを追加する処理
   *****************************************/
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "titletitle",
      content: "contentcontent",
      modDate: Date.now(),
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
      />
      {/* 情報を一つ抽出して受けわたす際に発火させる必要あり。 */}
      <Main activeNote={getActiveNote()}
            onUpdateNote={onUpdateNote}
            
      />
    </div>
  );
}

export default App;
