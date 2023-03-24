import Home from './pages/Home';
import Wiki from './pages/Wiki';
import WikiDetail from './pages/WikiDetail';
import NavBar from './components/NavBar';
import background from './images/background.jpg'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div 
      className="App"  
      style={{
        backgroundImage:`url(${background})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wiki' element={<Wiki/>}/>
        <Route path='/wiki/:wikiSection' element={<WikiDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
