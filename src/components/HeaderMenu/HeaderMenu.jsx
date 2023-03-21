import {useEffect, useState} from "react";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Paper, Slide,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import "./HeaderMenu.css"
import MenuIcon from "@mui/icons-material/Menu";

const logoStyle = {
    display: {
        xs: "none",
        md: "flex"
    },
    mr: 1,
    height: 30,
    background: "none"
};

const logoHamburgerMenuStyle = {
    display: {
        xs: "flex",
        md: "none"
    },
    flexGrow: 1,
    height: 30,
    background: "none"
};

const boxStyle = {
    flexGrow: 1,
    display: {
        xs: "flex",
        md: "none"
    }
};

const hamburgerMenuAnchorOrigin = {
    vertical: "bottom",
    horizontal: "left"
};

const hamburgerMenuTransformOrigin = {
    vertical: "top",
    horizontal: "left"
};

const hamburgerMenuStyle = {
    display: {
        xs: "block",
        md: "none"
    }
};

const menuOptionsStyle = {
    flexGrow: 1,
    display: {
        xs: "none",
        md: "flex"
    }
};

const userMenuAnchorOrigin = {
    vertical: "top",
    horizontal: "right"
};

const userMenuTransformOrigin = {
    vertical: "top",
    horizontal: "right"
};
export default function HeaderMenu(props) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [hideAppBarLogo, setHideAppBarLogo] = useState(true);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (event) => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setHideAppBarLogo(!!!window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return (
        <>
            <AppBar position={props.headerMenuPosition} sx={{position: {xs: "fixed", md: props.headerMenuPosition}}}>
                <Container maxWidth="x1">
                    <Toolbar disableGutters>
                        <Slide in={!hideAppBarLogo} direction="right">
                            <Paper elevation={0} sx={logoStyle}>
                                <img src={props.logoImage} alt="Logo"/>
                            </Paper>
                        </Slide>

                        <Box sx={boxStyle}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
                                        aria-haspopup="true" onClick={handleOpenNavMenu}
                                        color="inherit">
                                <MenuIcon/>
                            </IconButton>

                            <Menu id="menu-appbar" anchorEl={anchorElNav}
                                  anchorOrigin={hamburgerMenuAnchorOrigin} keepMounted
                                  transformOrigin={hamburgerMenuTransformOrigin}
                                  open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                                  sx={hamburgerMenuStyle}>
                                {Object.entries(props.menuOptions).map(([label, link]) => (
                                    <MenuItem key={label} onClick={handleCloseNavMenu} component={Link}
                                              href={link}>
                                        <Typography textAlign="center">{label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Paper elevation={0} sx={logoHamburgerMenuStyle}>
                            <img src={props.logoImage} alt="Logo"/>
                        </Paper>

                        <Box sx={menuOptionsStyle}>
                            {Object.entries(props.menuOptions).map(([label, link]) => (
                                <Button key={label} onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: "white", display: "block"}} component={Link} href={link}>
                                    {label}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open user settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="User" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                            <Menu sx={{mt: "45px"}} id="menu-appbar" anchorEl={anchorElUser}
                                  anchorOrigin={userMenuAnchorOrigin} keepMounted
                                  transformOrigin={userMenuTransformOrigin} open={Boolean(anchorElUser)}
                                  onClose={handleCloseUserMenu}>
                                {Object.entries(props.userMenuOptions).map(([label, link]) => (
                                    <MenuItem key={label} onClick={handleCloseUserMenu} component={Link}
                                              href={link}>
                                        <Typography textAlign="center">{label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
