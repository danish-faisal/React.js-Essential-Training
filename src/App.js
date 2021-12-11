import { useEffect, useReducer, useState } from 'react';
import './App.css';

/*
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
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);

  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div className="App">
      <h1>Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={() => { setEmotion("happy") }}>Make Happy</button>
      <button onClick={() => { setSecondary("crabby") }}>Make Crabby</button>
      <button onClick={() => { setEmotion("frustrated") }}>Frustrate</button>
      <button onClick={() => { setEmotion("enthusiastic") }}>Enthuse</button>
      <br />
      <input type="checkbox" onChange={toggle} value={checked} />
      <p>{checked ? "checked" : "not checked"}</p>
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
*/

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData);
  }, []);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }

  return <h1>No Users Available</h1>;
}

export default App;
