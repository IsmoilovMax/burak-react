import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";
import { retrieveTopUsers } from "./selector";

/** Redux Slice & Selector */
const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
            {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                  return (
                    <Card
                    key={member._id}
                    variant="outlined"
                    className={"card"}
                  >
                      <CardOverflow>
                        <AspectRatio ratio="1">
                        <img src={imagePath} alt="Member" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow>
                        <Typography className="member-nickname">
                        {member.memberNick}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack> 
        </Stack>
      </Container>
    </div>
  );
}
