import React from "react";

// это глобальный импорт
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Box } from "@mui/system";

// это локальный импорт
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, styled, Box } from "@mui/material";
// { user, id, handleButtonClick }
// export default function UserItem(props) {
// делаем деструктуризацию
    export default function UserItem({ user, id, handleButtonClick  }) {


    
    // return принимает ТОЛЬКО один ТЕГ
    return (
        // <p>{user.firstName}</p>

        // <p>TEST</p>

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={user.avatar}
                title={user.firstName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.firstName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleButtonClick}>Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
