import React from "react";


const Main = ({ activeNote, onUpdateNote }) => {
  // inputで指定した引数に該当する key ="title"value = e.target.value;
  const onEditNote = (key, value) => {
    onUpdateNote({
      // スプレット構文で以前のデータ＋変更されるデータのみ更新することを実現できる。
      // 動的キーと組み合わせることで強力になる。
      ...activeNote,
      // 動的キーを設定
      [key]: value,
      modDate: Date.now(),
    });
  };

  // 初回立ち上げ時、またノートのデータが無い場合にはactiveNoteはfalseのため、
  //　activenote.id等のデータを保持しておらず、レンダリングが不可な状態にある
  // そのためif文を活用して、falseの時に別でレンダリングを促す処理で回避することができる。
  if (!activeNote) {
    return <div>Note data is Nothing!</div>;
  }
  return (
    <div className="main">
      <div className="main__noteEdit">
        <input
          id="title"
          type="text"
          placeholder="Write title here!"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="Write contents here!"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>

      <div className="main__notePreview">
        <h1 className="main__previewTitle">{activeNote.title}</h1>
        {/* TODO: 改行が認識されていない */}
          <div className="main__markdownPreview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
