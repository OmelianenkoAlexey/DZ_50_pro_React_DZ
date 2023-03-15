import React from "react";

import { styled, Box } from "@mui/material";
import UsersList from "./UsersList";

const MainWrapperMain = styled(Box)(() => ({

    width: "80%",
    height: "auto",
    backgroundColor: "grey",
    color: "white",
    fontSize: "30px",
    padding: "20px",
    textAlign: "center",
}));

export default function Main() {
    return (
        <MainWrapperMain>
            <h1 className="title">Choose your QUIZ</h1>
            <UsersList />
        </MainWrapperMain>
    )
}