import Courses from "./Components/Courses.js";
import Header from "./Components/Header";
import MyCourse from "./Components/MyCourse";
import SideBar from "./Components/SideBar";
import { SenseiProvider, themeWhite as theme } from "react-sensei";
import "./Styles/App.css";
import AreaChart from "./Components/AreaChart.jsx";

function App() {
   return (
      <SenseiProvider theme={theme}>
         <div className="App">
            <SideBar />
            <div>
               <Header />
               <MyCourse />
               <Courses />
            </div>
            <div className="right-container">
               <AreaChart />
            </div>
         </div>
      </SenseiProvider>
   );
}

export default App;
