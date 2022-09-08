import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { TiBackspaceOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

const Sidebar = ({
  onAddNote,
  onDeleteNote,
  notes,
  activeNote,
  setActiveNote,
  onUpdateNote,
}) => {
  // 更新日が新しい順に並べ替えを行う
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  const onDeleteAction = (note) => {
    onUpdateNote({
      ...note,
      state:true
    })
    setTimeout(() => {onDeleteNote(note.id)},400);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Note</h1>
        <button onClick={onAddNote}>
          <GrAddCircle />
        </button>
      </div>
      <div className="sidebar__notes">
        {notes.map((note) => (
          // id が一致した場合にクラス名が付与される仕組み
          <div
            className={`sidebar__note 
            ${note.id === activeNote && "active"}
            ${note.state === true && "sidebar__noteDelete"}`
          }
            key={note.id}
            onClick={() => {
              setActiveNote(note.id);
            }}
          >
            <div className="sidebar__noteTitle">
              <strong>{note.title}</strong>
              <IconContext.Provider
                value={{ color: "black", className: "delete_icon" }}
              >
                {/* <button onClick={() => {setTimeout(() => onDeleteNote(note.id),4000)}}> */}
                <button onClick={() => onDeleteAction(note)}>
                  <TiBackspaceOutline />
                </button>
              </IconContext.Provider>
            </div>
            <div className="sidebar__noteContent">
              <p>{note.content}</p>
            </div>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-jp", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
