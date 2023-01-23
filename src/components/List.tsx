import React from "react";
import { Istate as IProps } from "../App"; // rename Istate to IProps

//Liste to props from parent
const List: React.FC<IProps> = ({ people }) => {
  //Declare a function to render list
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img src={person.url} className="List-img" /> <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
