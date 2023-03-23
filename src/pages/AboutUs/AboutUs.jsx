import ContentContainer from "../../components/ContentContainer/ContentContainer";
import {Typography} from "@mui/material";
import {aboutUsText} from "./aboutUsText";

const textStyle = {
    lineHeight: "2rem",
    textAlign: "justify",
    textIndent: "3em"
};

function PageContent(props) {
    return (
        <>
            {aboutUsText.split("\n").map(
                (paragraph) => {
                    return (
                        <>
                            <Typography sx={textStyle}>{paragraph}</Typography>
                            <br/>
                        </>
                    );
                })
            }
        </>
    );
}

export default function AboutUs(props) {
    return (
        <ContentContainer title="Sobre nós" bodyContent={<PageContent/>}/>
    );
}
