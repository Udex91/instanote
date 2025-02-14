import React, { useState } from "react";
import Footer from "../components/Footer";
import GeneralNavbar from "../components/Navbars/GeneralNavbar";
import CustomButton from "../components/CustomButton";




function WriteNote() {
  //state variables to store the title and content of the note
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // function to handle saving note
  const handleSave = () => {
    // save logic here
  };

  return (
    <div>
      <GeneralNavbar pageDirectory="/dashboard" name_1="Notes" name_2="Write" />
      <div className="writeNote-container">
        <h1>Write a Note</h1>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <button style={CustomButton} onClick={handleSave}>Save</button>
      </div>
     
      <Footer />
    </div>
  );
}

export default WriteNote;
