import ContentContainer from "../../components/ContentContainer/ContentContainer";
import {Box, Card, CardActionArea, CardContent, Divider, Grid, Link, Modal, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import parse, {domToReact} from 'html-react-parser';
import axios from "axios";

function createMarkup(htmlString) {
    const options = {
        replace: (domNode) => {
            if (domNode.type === 'tag' && domNode.name === 'img') {
                domNode.attribs.style = 'max-width: 100%;';
                return domToReact(domNode, options, domToReact);
            }
        }
    };
    return parse(htmlString, options);
}

async function getArticles() {
    try {
        const response = await axios.get('/webapi/articles');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

function PageContent(props) {
    const [open, setOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [articles, setArticles] = useState([]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs: 1, md: 400},
        maxHeight: "70vh",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflowY: "auto"
    };

    function handleOpen(review) {
        setSelectedReview(review);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    useEffect(() => {
        async function fetchData() {
            const result = await getArticles();
            setArticles(result);
        }

        fetchData();
    }, []);

    return (
        <Grid container columns={1} spacing={2} direction="column">
            {articles?.map((article) => {
                return (
                    <Grid item key={article.title} onClick={() => handleOpen(article)}>
                        <Card sx={{backgroundColor: "lightgray"}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {article.title}
                                    </Typography>
                                    <Divider/>
                                    <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                                        {`Por: ${article.author}`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                );
            })}
            <Modal open={open} onClose={handleClose} sx={{mx: {xs: 8, md: 0}}}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        {selectedReview === null ? null : selectedReview.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        Por: {selectedReview === null ? null : selectedReview.author}
                    </Typography>
                    <Typography variant="subtitle2">
                        Via: <Link
                        href={selectedReview ? selectedReview.link : null}>{selectedReview ? selectedReview.source : null}</Link>
                    </Typography>
                    <Typography sx={{mt: 2, lineHeight: "2rem", textAlign: "justify", hyphens: "auto"}}>
                        {selectedReview ? createMarkup(selectedReview.content) : null}
                    </Typography>
                </Box>
            </Modal>
        </Grid>
    );
}

export default function Articles(props) {
    return (
        <ContentContainer title="Artigos" bodyContent={<PageContent/>}/>
    );
}