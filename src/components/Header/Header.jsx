import "./Header.css"
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import {Paper} from "@mui/material";
import {useEffect, useState} from "react";

const headerBackground = {
    display: {
        xs: "none",
        md: "flex"
    },
    "maxHeight": 200
};
export default function Header(props) {
    const [fixHeaderMenu, setFixHeaderMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerBackground = document.getElementById("header-background");

            setFixHeaderMenu(window.scrollY > headerBackground.height);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return (
        <div className="header-div">
            <Paper elevation={0} sx={headerBackground}>
                <img id="header-background" className="header-img-background" src={props.headerImageBackground} alt="Header background"/>
                <img className="header-img-logo" src={props.headerLogo} alt="Logo"/>
            </Paper>
            <HeaderMenu menuOptions={props.routes} userMenuOptions={props.userMenuOptions}
                        logoImage={props.headerLogo} headerMenuPosition={fixHeaderMenu ? "sticky" : "static"}/>
        </div>
    );
}