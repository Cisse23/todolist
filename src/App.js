import './App.css';
import TodoList from './TodoList';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import{
  BrowserRouter, 
  Routes,
  Route, 
  Link,
} from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Simple Todolist</Typography>
          </Toolbar>
        </AppBar>

        <br></br>
        <Button variant="outlined" component={Link} to="/">Todo List</Button>
        <Button variant="outlined" component={Link} to="/about">About</Button>
        <Button variant="outlined" component={Link} to="/contact">Contact</Button>

        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
