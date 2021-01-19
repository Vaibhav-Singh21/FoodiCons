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

  function emoji(event) {
    var userInput = event.target.value;
    var meaning = foodEmot[userInput];
    if (userInput in foodEmot) {
      return setMeaning(meaning);
    }
    return setMeaning("Not in DB");
  }

  function emojiHandler(key) {
    var meaning = foodEmot[key];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Feel the <em>FoodIcons</em>
      </h1>
      <input onChange={emoji} />
      <h2> {meaning} </h2>
      <h3>Emoji in DB:</h3>
      <div id="DB">
        {Object.entries(foodEmot).map(([key, value]) => {
          return (
            <span key={key} onClick={() => emojiHandler(key)}>
              {key}
            </span>
          );
        })}
      </div>
    </div>
  );
}
