import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GroupMember from "../../components/GroupMember/GroupMember";
import {Grid, Typography} from "@mui/material";

const desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a magna ac tortor sollicitudin interdum et vitae felis. Nulla ut blandit orci, eu congue est. Quisque nec commodo libero. Nam sagittis nisl nisi, sed facilisis felis consequat vitae. Nam nec lacus lorem. Praesent nibh sem, tempus ut tincidunt sed, lobortis id sapien. Etiam rhoncus hendrerit nibh ac porta.`

export default function ProjectTeam() {
    return (
        <ContentContainer title="Equipe" bodyContent={<PageContent/>}/>
    );
}

function PageContent(props) {
    return (
        <Grid container columns={1} spacing={2}>
            <Grid item children={<GroupMember name="Kaik Wulck Bassanelli" description={desc}></GroupMember>}/>
            <Grid item children={<GroupMember name="Leonardo" description={desc}></GroupMember>}/>
            <Grid item children={<GroupMember name="Lucas Shiaku Satoru" description={desc}></GroupMember>}/>
            <Grid item children={<GroupMember name="Rafael Viera Pinto" description={desc}></GroupMember>}/>
        </Grid>
    );
}