import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
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
      <h1>Who do you want to see { name }?</h1>
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
