import React from "react";

import { styled, Box } from "@mui/material";

const MainWrapperLeft = styled(Box)(() => ({

    width: "20%",
    height: "auto",
    backgroundColor: "green",
    color: "white",
    fontSize: "50px",
    padding: "20px",
    textAlign: "center",
}));

export default function Left() {
    return (
        // <Grid container spacing={4}></Grid>
        <MainWrapperLeft>
            LEFT
        </MainWrapperLeft>
    )
}