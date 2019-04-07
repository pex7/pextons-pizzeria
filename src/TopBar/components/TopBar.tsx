import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import Cart from "./Cart";

export default function TopBar() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <ToolbarContents>
          <Typography variant="h6" color="inherit">
            Pexton's Pizzeria
          </Typography>
          <Cart />
        </ToolbarContents>
      </Toolbar>
    </AppBar>
  );
}

const ToolbarContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
