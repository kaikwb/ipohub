// import {Component} from "react";
// import {
//     AppBar, Avatar,
//     Box,
//     Button,
//     Container,
//     IconButton,
//     Link,
//     Menu,
//     MenuItem, Paper,
//     Toolbar,
//     Tooltip,
//     Typography, useScrollTrigger
// } from "@mui/material";
// import "./HeaderMenu.css"
// import LogoDevIcon from "@mui/icons-material/LogoDev";
// import MenuIcon from "@mui/icons-material/Menu";
//
// const logo_style = {
//     display: {
//         xs: "none",
//         md: "flex"
//     },
//     mr: 1,
//     height: 30,
//     background: "none"
// };
//
// const logo_hamburger_menu_style = {
//     display: {
//         xs: "flex",
//         md: "none"
//     },
//     flexGrow: 1,
//     height: 30,
//     background: "none"
// };
//
// const name_style = {
//     mr: 2,
//     display: {
//         xs: "none",
//         md: "flex"
//     },
//     fontFamily: "monospace",
//     fontWeight: 700,
//     letterSpacing: ".3rem",
//     color: "inherit",
//     textDecoration: "none",
// };
//
// const box_style = {
//     flexGrow: 1,
//     display: {
//         xs: "flex",
//         md: "none"
//     }
// };
//
// const hamburger_menu_anchor_origin = {
//     vertical: "bottom",
//     horizontal: "left"
// };
//
// const hamburger_menu_transform_origin = {
//     vertical: "top",
//     horizontal: "left"
// };
//
// const hamburger_menu_style = {
//     display: {
//         xs: "block",
//         md: "none"
//     }
// };
//
// const menu_options_style = {
//     flexGrow: 1,
//     display: {
//         xs: "none",
//         md: "flex"
//     }
// };
//
// const user_menu_anchor_origin = {
//     vertical: "top",
//     horizontal: "right"
// };
//
// const user_menu_transform_origin = {
//     vertical: "top",
//     horizontal: "right"
// };
// export default class HeaderMenu extends Component {
//     state = {
//         anchorElNav: null,
//         anchorElUser: null
//     }
//
//     handleOpenNavMenu(event) {
//         this.setState({anchorElNav: event.currentTarget});
//     }
//
//     handleOpenUserMenu(event) {
//         this.setState({anchorElUser: event.currentTarget});
//     }
//
//     handleCloseNavMenu(event) {
//         this.setState({anchorElNav: null});
//     }
//
//     handleCloseUserMenu(event) {
//         this.setState({anchorElUser: null});
//     }
//
//     render() {
//         return (
//             <AppBar position="static">
//                 <Container maxWidth="x1">
//                     <Toolbar disableGutters>
//                         <Paper elevation="0" sx={logo_style}>
//                             <img src={this.props.logoImage} alt="Logo" />
//                         </Paper>
//                         {/*<LogoDevIcon sx={logo_style}/>*/}
//                         {/*<Typography variant="h6" noWrap sx={name_style}>Logo</Typography>*/}
//                         <Box sx={box_style}>
//                             <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
//                                         aria-haspopup="true" onClick={this.handleOpenNavMenu.bind(this)}
//                                         color="inherit">
//                                 <MenuIcon/>
//                             </IconButton>
//                             <Menu id="menu-appbar" anchorEl={this.state.anchorElNav}
//                                   anchorOrigin={hamburger_menu_anchor_origin} keepMounted
//                                   transformOrigin={hamburger_menu_transform_origin}
//                                   open={Boolean(this.state.anchorElNav)} onClose={this.handleCloseNavMenu.bind(this)}
//                                   sx={hamburger_menu_style}>
//                                 {Object.entries(this.props.menuOptions).map(([label, link]) => (
//                                     <MenuItem key={label} onClick={this.handleCloseNavMenu.bind(this)} component={Link}
//                                               href={link}>
//                                         <Typography textAlign="center">{label}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                         {/* Logo menu hamburger */}
//                         <Paper elevation="0" sx={logo_hamburger_menu_style}>
//                             <img src={this.props.logoImage} alt="Logo" />
//                         </Paper>
//                         {/*<LogoDevIcon sx={{display: {xs: "flex", md: "none"}, mr: 1}}/>*/}
//                         {/*<Typography variant="h5" noWrap component="a" href="" sx={{*/}
//                         {/*    mr: 2,*/}
//                         {/*    display: {xs: "flex", md: "none"},*/}
//                         {/*    flexGrow: 1,*/}
//                         {/*    fontFamily: "monospace",*/}
//                         {/*    fontWeight: 700,*/}
//                         {/*    letterSpacing: ".3rem",*/}
//                         {/*    color: "inherit",*/}
//                         {/*    textDecoration: "none",*/}
//                         {/*}}*/}
//                         {/*>*/}
//                         {/*    LOGO*/}
//                         {/*</Typography>*/}
//                         {/* End logo menu hamburger */}
//                         <Box sx={menu_options_style}>
//                             {Object.entries(this.props.menuOptions).map(([label, link]) => (
//                                 <Button key={label} onClick={this.handleCloseNavMenu.bind(this)}
//                                         sx={{my: 2, color: "white", display: "block"}} component={Link} href={link}>
//                                     {label}
//                                 </Button>
//                             ))}
//                         </Box>
//
//                         <Box sx={{flexGrow: 0}}>
//                             <Tooltip title="Open user settings">
//                                 <IconButton onClick={this.handleOpenUserMenu.bind(this)} sx={{p: 0}}>
//                                     <Avatar alt="User" src="/static/images/avatar/2.jpg"/>
//                                 </IconButton>
//                             </Tooltip>
//                             <Menu sx={{mt: "45px"}} id="menu-appbar" anchorEl={this.state.anchorElUser}
//                                   anchorOrigin={user_menu_anchor_origin} keepMounted
//                                   transformOrigin={user_menu_transform_origin} open={Boolean(this.state.anchorElUser)}
//                                   onClose={this.handleCloseUserMenu.bind(this)}>
//                                 {Object.entries(this.props.userMenuOptions).map(([label, link]) => (
//                                     <MenuItem key={label} onClick={this.handleCloseUserMenu.bind(this)} component={Link}
//                                               href={link}>
//                                         <Typography textAlign="center">{label}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         );
//     }
// }