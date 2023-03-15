import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, styled, Box } from "@mui/material";
import UserItem from "./UserItem";

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
            const { data } = await axios.get("https://63f0c7635b7cf4107e26a8c8.mockapi.io/react");
            setUsers(data);
        })();
    }, []);


    // const handleSetCounter = () => {
    //     setcounter(++counter);
    //     console.log(counter);
    // }

    const startQuiz = () => {
        console.log("Quiz started");
        alert("Quiz started")
    }

    return (

        <MainWrapperMain>
            {users.map((user, index) => (
                <UserItem
                    key={index}
                    user={user}
                    id={index}
                    ButtonStartQuiz={startQuiz}
                />
            ))}
        </MainWrapperMain>
    )
}