import ContentContainer from "../../components/ContentContainer/ContentContainer";
import {Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Modal, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";

async function getVideos() {
    try {
        const response = await axios.get('/webapi/videos');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

function PageContent(props) {
    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs: 1, md: "unset"},
        maxHeight: "70vh",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflowY: "auto"
    };

    function handleOpen(video) {
        setSelectedVideo(video);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    useEffect(() => {
        async function fetchData() {
            const result = await getVideos();
            setVideos(result);
        }

        fetchData();
    }, []);

    return (
        <Grid container columns={1} spacing={2} direction="column">
            {videos?.map((video) => {
                return (
                    <Grid item key={video.title} onClick={() => handleOpen(video)}>
                        <Card sx={{backgroundColor: "lightgray"}}>
                            <CardActionArea>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <CardMedia component="img" image={video.thumbnail} alt="Video Thumbnail"/>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {video.title}
                                            </Typography>
                                            <Divider/>
                                            <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                                                {`Por: ${video.author}`}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                        </Card>
                    </Grid>
                );
            })}
            <Modal open={open} onClose={handleClose} sx={{mx: {xs: 8, md: 0}}}>
                <Box sx={style}>
                    <iframe width="560" height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo ? selectedVideo.videoId : null}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </Box>
            </Modal>
        </Grid>
    );
}

export default function Videos(props) {
    return (
        <ContentContainer title="Videos" bodyContent={<PageContent/>}/>
    );
}