import {Card, CardContent, CardHeader, Divider, Typography} from "@mui/material";

export default function GroupMember(props) {
    return (
        <Card sx={{backgroundColor: "lightgray"}}>
            <CardHeader title={props.name}></CardHeader>
            <Divider variant="middle"/>
            <CardContent>
                <Typography sx={{textIndent: 50}}>{props.description}</Typography>
            </CardContent>
        </Card>
    );
}
