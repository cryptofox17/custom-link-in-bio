import './App.css'
import Header from './components/header'
import Main from './components/main'
import Stars from './components/stars'
function App() {
  return (
    <div className="App">
        <Stars />
        <div className="container">
          <Header />
          <Main />
        </div>
    </div>
  );
}

export default App;
