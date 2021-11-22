import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

const App = () => {
  const [addIteam, setaddIteam] = useState([]);
  const addNote = (note) => {

    setaddIteam((prevalue) => {
      return [...prevalue, note]
    });
  }

  const ondelete = (id) => {
    setaddIteam((oldvalue) => 
      oldvalue.filter((currdata, index) => {
        return index !== id;
      })
    )
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addIteam.map((val, index) => {
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={ondelete}

        />
      })
      }

      <Footer />
    </>
  )
}


export default App;