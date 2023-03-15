import React, { useEffect, useState } from "react";
import axios from "axios";

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
import UserItem from "./UserItem";


// создаем свой личный контейнер и стили
const MainWrapperMain = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    padding: "10px",
}));



export default function UsersList() {
    let [users, setUsers] = useState([]);
    let [counter, setcounter] = useState(0);
    useEffect(() => {
        (async () => {
            // const response = await axios.get("https://63f0c7635b7cf4107e26a8c8.mockapi.io/react");
            // console.log(response);
            // setUsers(response);

            // делаем деструктуризацию, достаем data
            const { data } = await axios.get("https://63f0c7635b7cf4107e26a8c8.mockapi.io/react");
            // console.log(data);
            setUsers(data);
        })();
    }, []);
    // }, [counter]);

    const handleSetCounter = () => {
        setcounter(++counter);
        console.log(counter);
    }


    // const fetchUserData = async () => {
    //     const response = await axios.get("https://63f0c7635b7cf4107e26a8c8.mockapi.io/react");
    //     setUsers(response);
    //     console.log(users);
    // };
    // fetchUserData();
    return (

        // <Grid container spacing={4}></Grid>
        <MainWrapperMain>

            {/* <button onClick={handleSetCounter}>Set counter</button> */}

            {users.map((user, index) => (
                <UserItem
                key={index}
                user={user}
                id={index}
                handleButtonClick={handleSetCounter}/>
            ))}

            
        </MainWrapperMain>
    )
}