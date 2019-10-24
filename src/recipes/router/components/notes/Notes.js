import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./notes.styles.sass";

const Notes = props => {
  const initialNotes = [
    {
      id: 1,
      title: "My note 1"
    },
    {
      id: 2,
      title: "My note 2"
    },
    {
      id: 3,
      title: "My note 3"
    }
  ];

  const [notes, addNote] = useState(initialNotes);

  /** @Step_Zero: Let's see what contains our props object **/

  console.log(props);

  /** @Step_One: We got the noteId param from match object. **/
  const {
    match: {
      params: { noteId }
    }
  } = props;

  /** @Step_Three: By default our selectedNote is false **/
  let selectedNote = false;

  if (noteId > 0) {
    /** @Step_Four: If the note id is higher than 0 then we filter it from our notes array **/
    selectedNote = notes.filter(note => note.id === Number(noteId));
  }

  const renderNotes = notes => (
    <ul>
      {notes.map((note, key) => (
        <li key={key}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="Notes">
      <Link to={"/notes"}>
        <h1>Notes</h1>
      </Link>
      {/** @Comment We render our selectedNote or all notes */}
      {renderNotes(selectedNote || notes)}
    </div>
  );
};

export default Notes;
