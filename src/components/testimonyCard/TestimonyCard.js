import Typography from "@mui/material/Typography";
import { Card, CardHeader, CardContent, Avatar, Box } from "@mui/material/";
import { Quotes, MapPin, TrashSimple } from "phosphor-react";

const TestimonyCard = (props) => {
    const testimony = props.testimony;

    return (
        <Card sx={{ maxWidth: 272, m: 1 }}>
            <CardHeader
                sx={{ paddingBottom: 0.5 }}
                avatar={
                    <Avatar
                        alt={testimony.name}
                        src={testimony.avatar}
                        sx={{ width: 56, height: 56 }}
                    />
                }
                action={<Quotes size={32} weight="fill" />}
                title={testimony.name}
                subheader={
                    <Box color={"black"} display={"flex"} alignItems={"center"}>
                        <MapPin color={"black.500"} size={18} weight="fill" />
                        <span>{testimony.location}</span>
                    </Box>
                }
            />
            <CardContent sx={{ paddingTop: 0.5 }}>
                <Typography variant="body2">{testimony.message}</Typography>
            </CardContent>
            <CardContent>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <span>Rating:&nbsp;{testimony.rating}</span>
                    <TrashSimple size={24} weight="fill" color={"grey"} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default TestimonyCard;
