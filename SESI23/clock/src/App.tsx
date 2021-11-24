import './App.css';
import Router from './Router';
import RClockClass from './components/RealtimeClockClass';
import RClockFunction from './components/RealtimeClockFunction';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Add Routes using 'react-router-dom'
function App() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold"><span className="text-primary">Function</span> & <span className="text-success">Class</span> Clock</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <h2 className="btn-primary btn-lg px-4 gap-3"><RClockClass/></h2>
          <h2 className="btn-success btn-lg px-4"><RClockFunction/></h2>
        </div>
      </div>
      <Router />
    </div>
  );
}

export default App;