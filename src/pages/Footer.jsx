import React from "react";

import { styled, Box } from "@mui/material";

const MainWrapperFooter = styled(Box)(() => ({

    width: "100vw",
    height: "200px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "50px",
    padding: "20px",
    textAlign: "center",
}));

export default function Header() {
    return (
        <MainWrapperFooter>
            FOOTER
        </MainWrapperFooter>
    )
}