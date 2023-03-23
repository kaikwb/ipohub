import React from 'react';
import {Button, Card, CardActions, CardContent, Container, Grid, Link, Typography} from "@mui/material";

function PageCard(props) {
    return (
        <Grid item lg={1} sx={{padding: 0}}>
            <Card sx={{height: 1, display: "flex", flexDirection: "column", flexGrow: 1}}>
                <CardContent>
                    <Typography variant="h5" gutterBottom component="div">{props.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{mt: "auto"}}>
                    <Link href={props.link} component={Button}
                          sx={{textDecoration: "none"}}>{props.linkButtonDescription}</Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

function Home() {
    return (
        <Grid container columns={1} direction="column" rowSpacing={3} zeroMinWidth={false} alignItems="stretch"
              sx={{my: 2, width: 1200}}>
            <Grid item>
                <Card>
                    <CardContent sx={{textAlign: "center"}}>
                        <Typography variant="h2">O seu HUB sobre IPO</Typography>
                        <Typography variant="body1" sx={{mt: 2}}>Aqui você fica sabendo tudo sobre IPO e fica ligando em tudo o que
                            os especialista dizem para não perder a melhor oportunidade de lucrar.</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item container columns={3} spacing={3}>
                <PageCard title="Videos" description="Assista os melhores conteúdos sobre IPO" link="/videos"
                          linkButtonDescription="Assista agora"/>
                <PageCard title="Materiais"
                          description="Leia os materias repletos de detalhes e explicações de como funciona os IPO"
                          link="/texts" linkButtonDescription="Leia agora"/>
                <PageCard title="Análises" description="Veja as análises dos especialistas sobre os próximos IPO"
                          link="/reviews" linkButtonDescription="Veja agora"/>
            </Grid>
        </Grid>
    );
}

export default Home;
