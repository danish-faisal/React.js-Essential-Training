import { useState } from 'react';
import './App.css';
import restaurant from "./restaurant.jpg"

function Header(props) {
  return (
    <h1>{props.name}'s Kitchen</h1>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img height="200" src={restaurant} alt="napkin and silverware at a restaurant table" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone"
];

const dishObjects = dishes.map((dish, idx) => ({ id: idx, title: dish }));


function App() {
  const [emotion, SetEmotion] = useState("happy");

  return (
    <div className="App">
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={() => { SetEmotion("happy") }}>Happy</button>
      <button onClick={() => { SetEmotion("frustrated") }}>Frustrate</button>
      <button onClick={() => { SetEmotion("enthusiastic") }}>Enthuse</button>
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
