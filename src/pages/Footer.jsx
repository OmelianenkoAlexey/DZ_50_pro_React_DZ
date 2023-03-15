import React from "react";

import { styled, Box } from "@mui/material";

    const MainWrapperFooter = styled(Box)(() => ({
       
        width: "100vw",
        height: "200px",
        backgroundColor: "blue",
        color: "white",
        fontSize: "50px",
    }));

export default function Header() {
    return (
        // <Grid container spacing={4}></Grid>
        <MainWrapperFooter> FOOTER
        </MainWrapperFooter>
    )
}