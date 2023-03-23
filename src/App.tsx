import Home from './pages/Home';
import background from './images/background.jpg'

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
      <Home/>
    </div>
  );
}

export default App;
