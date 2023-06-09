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
import background from "./background.svg"
import Reviews from "./pages/Reviews/Reviews";
import Videos from "./pages/Videos/Videos";
import Signup from "./pages/Signup/Signup";
import Articles from "./pages/Texts/Articles";

function App() {
    return (
        <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <BrowserRouter>
                <Header id="header" headerImageBackground={forex} headerLogo={logo} routes={routes}
                        userMenuOptions={userMenuOptions}/>
                <div id="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/team" element={<ProjectTeam/>}/>
                        <Route path="/about_us" element={<AboutUs/>}/>
                        <Route path="/reviews" element={<Reviews/>}/>
                        <Route path="/videos" element={<Videos/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/articles" element={<Articles/>}/>
                    </Routes>
                </div>
                <Footer id="footer" routes={routes}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
