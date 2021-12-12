import { useEffect, useReducer, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Home, About, Events, Contact, Whoops404 } from "./pages";

/*
import restaurant from "./restaurant.jpg"

// Header component with a dunamic-proprty 'name'
function Header(props) {
  return (
    <h1>{props.name}'s Kitchen</h1>
  );
}

// Main component with a dunamic-property 'adjective'
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img height="200" src={restaurant} alt="napkin and silverware at a restaurant table" />     // restaurant an imported image-comp, can also place a url as string
      <ul style={{ textAlign: "left" }}>    // style-obj to style the list, camelCasing of object-based-props unlike CSS
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}       // mapping over the dishes(array-of-obj) - that contains dish-name with a unique-key 'id' built with their indices
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

// Build array of objects so that each val will be unique with a property to have as a key
const dishObjects = dishes.map((dish, idx) => ({ id: idx, title: dish }));


function App() {
  // The `useState` Hook allows a developer to create and use states
  const [emotion, setEmotion] = useState("happy");    // returns an array - with value and function to update value
  const [secondary, setSecondary] = useState("tired");

  // is triggered whenever state is changed, to handle non-UI functionalities => takes a callback function to trigger, and value(s) in an array as 2nd arg to look for its change
  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);

  // One purpose of the `useReducer` Hook is to prevent hardcoding by encapsulating code that processes user input into a new function.
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
      <p>{checked ? "checked" : "not checked"}</p>    # ternary operator to dynamically change values based on state
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
*/

/*
function App({ login }) {
  const [data, setData] = useState(null);           // to display in success stage
  const [loading, setLoading] = useState(false);    // to display in loading stage 
  const [error, setError] = useState(null);         // to displaye in failure stage

  useEffect(() => {
    if (!login) return;       // if no username, do nothing and return
    // setLoading(true);         displays loading message, as its state is updated

    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);             // pass the error message in error-val using setError to display
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!data) return null;

  return (<div>
    <h1>{data.name}</h1>
    <p>{data.location}</p>
    <img src={data.avatar_url} alt={data.login} />
  </div>);
}
*/

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
