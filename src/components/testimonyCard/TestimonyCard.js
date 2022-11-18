import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Quotes, MapPin, TrashSimple } from "phosphor-react";

const TestimonyCard = (props) => {
    const testimony = props.testimony;

    return (
        <Card sx={{ maxWidth: 330, m: 1 }}>
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
                title={
                    <Typography variant="body2" fontSize={16}>
                        {testimony.name}
                    </Typography>
                }
                subheader={
                    <Box color={"black"} display={"flex"} alignItems={"center"}>
                        <MapPin color={"black.500"} size={16} weight="fill" />
                        <Typography variant="body2">
                            {testimony.location}
                        </Typography>
                    </Box>
                }
            />
            <CardContent sx={{ paddingTop: 0.5, paddingBottom: 0 }}>
                <Typography
                    variant="body2"
                    fontSize={14}
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {testimony.message}
                </Typography>
            </CardContent>
            <CardContent>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Typography variant="body2">
                        Rating:&nbsp;
                        <Box component="span" fontWeight="bold">
                            {testimony.rating}
                        </Box>
                    </Typography>
                    <IconButton
                        onClick={(e) => props.removeTestimony(testimony.id)}
                    >
                        <TrashSimple size={22} weight="fill" color={"grey"} />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TestimonyCard;
