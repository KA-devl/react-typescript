import React, { useState } from "react";
import { Istate as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddCard: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //ex : ...input, name : anes
    });
  };
  const handleSubmit = (e: any): void => {
    if (!input.name || !input.age || !input.img) {
      alert("Fields are empty");
    } else {
      setPeople([
        ...people,
        {
          name: input.name,
          age: parseInt(input.age),
          url: input.img,
          note: input.note,
        },
      ]);

      setInput({
        name: "",
        age: "",
        note: "",
        img: "",
      });
    }
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />

      <button className="AddToList-btn" onClick={handleSubmit}>
        Add to the list
      </button>
    </div>
  );
};

export default AddCard;
