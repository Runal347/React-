
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
    {/* Easy configurations ko lagi props use garna milyo */}

    
<Navbar title="TextUtilities" aboutText="About Us"></Navbar>

<div className="container my-3">
  <Textform heading="Enter Your text to analyze"/>
</div>


    </>
  );
}

export default App;
