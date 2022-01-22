import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <TodoApp />
    </div>
    </Router>
  );

}

export default App;
