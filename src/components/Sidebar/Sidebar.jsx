import React from "react";

const Sidebar = ({
  onAddNote,
  onDeleteNote,
  notes,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Note</h1>
        <button onClick={onAddNote}> Add</button>
      </div>
      <div className="sidebar__notes">
        {notes.map((note) => (
          // id が一致した場合にクラス名が付与される仕組み
          <div
            className={`sidebar__note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => {
              setActiveNote(note.id);
            }}
          >
            <div className="sidebar__noteTitle">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>DELETE</button>
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
