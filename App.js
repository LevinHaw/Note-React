import React, { useState } from "react";
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  currentNote,
  setCurentNote,
  updateNote,
  deletNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setCurrentNote={setCurentNote}
          deleteNote={deletNote}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrenPage={setCurrentPage}
          currentNote={currentNote}
          updateNote={updateNote}
        />
      );
    default:
      <Home />;
      break;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note Pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const [currentNote, setCurentNote] = useState([]);

  const updateNote = (id, title, desc) => {
    const updateNote = noteList.map((note) => {
      if (note.id === id) {
        return {
          id,
          title,
          desc,
        };
      }
      return note;
    });

    setNoteList(updateNote);
  };

  const deleteNote = (id) => {
    const deleteNote = noteList.filter((note) => {
      return note.id !== id;
    });

    setNoteList(deleteNote);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      currentNote={currentNote}
      setCurentNote={setCurentNote}
      updateNote={updateNote}
      deletNote={deleteNote}
    />
  );
};

export default App;
