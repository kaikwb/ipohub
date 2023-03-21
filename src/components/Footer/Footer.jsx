import {Container, Grid, Link, Typography, useTheme} from "@mui/material";
import {Facebook, GitHub, LinkedIn, Twitter} from "@mui/icons-material";

export default function Footer(props) {
    const theme = useTheme();

    const color = theme.palette.primary.contrastText;
    const backgroundColor = theme.palette.primary.main;

    return (
        <footer style={{marginTop: "auto"}}>
            <Container maxWidth="false" sx={{backgroundColor: backgroundColor, color: color, py: 1}}>
                <Typography textAlign="center" sx={{display: {xs: "none", md: "block"}}}>Av. Paulista, 1106 / Edifício Paulista, 1100 – 4º, 5º, 6º e 7º andares</Typography>
                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{height: 70}}>
                    <Grid item>
                        <Link href="https://linkedin.com"><LinkedIn htmlColor={color}/></Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://facebook.com"><Facebook htmlColor={color}/></Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://twitter.com"><Twitter htmlColor={color}/></Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://github.com"><GitHub htmlColor={color}/></Link>
                    </Grid>
                </Grid>
                <Typography textAlign="center">COPYRIGHT © 2023 IpoHub</Typography>
            </Container>
        </footer>
    );
}
