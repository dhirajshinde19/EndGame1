import logo from './logo.svg';
import './App.css';
import bookform from './component/bookform';
import booktable from './component/booktable';
import {Routes,Route,Navigate} from 'react-router-dom'
import BookTable from './component/booktable';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BookTable/>}></Route>
        <Route path="/form" element={<bookform/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
