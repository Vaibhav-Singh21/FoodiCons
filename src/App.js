import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const foodEmot = {
    "🍌": "banana",
    "🍎": "apple",
    "🥭": "mango",
    "🍒": "cherry",
    "🍅": "Tomato",
    "🍍": "pineapple",
    "🍐": "pear",
    "🍕": "pizza",
    "🍔": "Burger",
    "🍟": "fries",
    "🌭": "hotDog",
    "🍿": "PopCorn",
    "🥚": "Egg",
    "🥞": "pancakes",
    "🍞": "bread",
    "🥪": "sandwich",
    "🌮": "Taco",
    "🎂": "Cake",
    "🍫": "chocolate",
    "☕": "Chai",
    "🍺": "Beer",
    "🥃": "Rum"
  };

  var [meaning, setMeaning] = useState("");

  emoji = (event) => {
    var userInput = event.target.value;
    var meaning = foodEmot[userInput];
    if (userInput in foodEmot) {
      return setMeaning(meaning);
    }
    return setMeaning("Not in DB");
  };
  return (
    <div className="App">
      <h1>Understand The Emoticons</h1>
      <input onChange={emoji} />
      <h2> {meaning} </h2>
      <div id="DB">
        <span>Emoji in DB:</span>
        {
          //in this way loop over the Objects
          Object.entries(foodEmot).map(([key, value]) => {
            return key;
          })
        }
      </div>
    </div>
  );
}
