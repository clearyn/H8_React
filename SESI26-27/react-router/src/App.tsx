import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { myCounter } from './store';
import { increment, decrement, setCounter } from './store/actions'
import {
  useDispatch, //Melempar action
  useSelector// Mengambil state dari store
} from 'react-redux'

function App() {
  const state = useSelector((state: myCounter) => state.counter)
  const dispatch = useDispatch()

  const incrementCounter = () => {
    dispatch(
      increment()
    )
  }

  const decrementCounter = () => {
    dispatch(
      decrement()
    )
  }

  const customIncrement = (value = 10) => {
    dispatch(
      setCounter(state! + value)
    )
  }

  return (
    <div className="App">
      <div>
        <h3>Counter Time</h3>
        <h3>{state}</h3>
        <button id="decrement" onClick={decrementCounter}>-</button>
        <button id="increment" onClick={incrementCounter}>+</button>
        <button id="custom" onClick={() => customIncrement(25)}>+25</button>
      </div>
      <BrowserRouter>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/about">About</Link> |&nbsp;
        <Link to="/abouts">Abouts</Link> |&nbsp;
        <Link to="/contact">Contact</Link> |&nbsp;
        <Link to="/about/fulan">About Fulan</Link> |&nbsp;
        <Link to="/about/fulana">About Fulana</Link> |&nbsp;

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/abouts" element={<Abouts />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Abouts(): JSX.Element {
  const location = useLocation()
  let { name } = useParams()

  return (
    <>
      <h1>Who do you want to see {name}?</h1>
      <h3>Please select a name :</h3>
      <ul>
        <li> <Link to={`${location.pathname}/fulan`}>Fulan</Link></li>
        <li> <Link to={`${location.pathname}/fulana`}>Fulana</Link></li>
      </ul>

      <Routes>
        <Route path={`${location.pathname}/:name`} element={<Abouts />} />
      </Routes>
    </>
  )
}

export default App;
