import './App.css'
import Main from './components/Main/Main';
import './scroll.css'

function App() {

  window.addEventListener("mousewheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  }, { passive: false });

  return (
    <Main />
  )
}

export default App
