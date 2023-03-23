import './App.css';
import Header from "./components/Header/Header";
import forex from './forex.svg';
import logo from "./logo.svg"
import Footer from "./components/Footer/Footer";
import {routes} from "./data/routes"
import {userMenuOptions} from "./data/user_menu_options";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
    return (
        <div className="App">
            <Header headerImageBackground={forex} headerLogo={logo} routes={routes} userMenuOptions={userMenuOptions}/>
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
            {/*<div style={{height: 3000}}>TesteABC</div>*/}
            <AboutUs/>
            <Footer routes={routes}/>
        </div>
    );
}

export default App;
