import Courses from "./Components/Courses.js";
import Header from "./Components/Header";
import MyCourse from "./Components/MyCourse";
import SideBar from "./Components/SideBar";
import "./Styles/App.css";

function App() {
   return (
      <div className="App">
         <SideBar />
         <div>
            <Header />
            <MyCourse />
            <Courses />
         </div>
      </div>
   );
}

export default App;
