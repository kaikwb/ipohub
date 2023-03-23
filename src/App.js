import './App.css';
import Header from "./components/Header/Header";
import forex from './forex.svg';
import logo from "./logo.svg"
import Footer from "./components/Footer/Footer";
import {routes} from "./data/routes"
import {userMenuOptions} from "./data/user_menu_options";
import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectTeam from "./pages/ProjectTeam/ProjectTeam";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header headerImageBackground={forex} headerLogo={logo} routes={routes}
                        userMenuOptions={userMenuOptions}/>
                <div id="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/team" element={<ProjectTeam/>}/>
                        <Route path="/about_us" element={<AboutUs/>}/>
                    </Routes>
                </div>
                <Footer routes={routes}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
