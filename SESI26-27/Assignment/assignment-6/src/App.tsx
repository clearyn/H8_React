import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KanbanBoard from './components/kanban-board';

function App(){

  return (
    <>
      <Navbar />
      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<KanbanBoard />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
