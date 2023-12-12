import logo from './logo.svg';
import './App.css';
import AddList from './components/AddList';
import SearchList from './components/SearchList';
import DeleteList from './components/DeleteList';
import ViewList from './components/ViewList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '' element = {<AddList/>}/>
      <Route path = 'search' element = {<SearchList/>}/>
      <Route path = 'delete' element = {<DeleteList/>}/>
      <Route path = 'view' element = {<ViewList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
