import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddCard from "./components/AddCard";

//Declare expected state
//When passing and using interface, you can use export, so you won't need to redefine it again.
export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "Cristiano ronaldo",
      age: 38,
      url: "https://images.hellomagazine.com/imagenes/celebrities/20220530141601/cristiano-ronaldo-toned-torso-sauna-selfie/0-689-676/cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg",
      note: "SIUUUU",
    },
  ]);

  return (
    <div className="App">
      <h1>People's list</h1>
      <List people={people} />
      <AddCard people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
