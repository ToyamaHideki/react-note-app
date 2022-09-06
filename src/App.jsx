import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
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
    console.log(notes);
  };

  /*****************************************
   *        ノートを削除する処理
   *****************************************/
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
