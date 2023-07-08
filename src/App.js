import './App.css';
import NavBar from "./component/NavBar/NavBar";
import SecondSection from "./component/secondSection/SecondSection";
import ThirdSection from './component/ThirdSection/ThirdSection';
import ForthSection from './component/FourthSection/FourthSection';

const App = () =>{
  return(
    <div className="container">
    <NavBar />
    <SecondSection />
    <ThirdSection />
    <ForthSection />  
    </div>
  )
}

export default App;
