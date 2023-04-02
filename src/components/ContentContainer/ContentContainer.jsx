import {Divider, Paper, Typography} from "@mui/material";

const titleStyle = {
    fontSize: {xs: 24, md: 36},
    textAlign: "center",
    paddingBottom: 2
};
export default function ContentContainer(props) {
    return (
        <Paper elevation={8} sx={{width: {xs: 1, md: 600}, my: 2, flexGrow: 1, p: 2}}>
            {(() => {
                if (!props.title) return null;

                return (
                    <>
                        <Typography sx={titleStyle}>{props.title}</Typography>
                        <Divider variant="middle" sx={{mb: 3}}/>
                    </>
                );
            })()}
            {props.bodyContent}
        </Paper>
    );
}
