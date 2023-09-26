import './App.css';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoHome from './components/TodoHome';
import TodoEdit from './components/TodoEdit';
function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<TodoHome/>} />
        <Route path="/about" element={<About/>} />
        <Route exact path="/todoedit/:id" Component={TodoEdit} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
