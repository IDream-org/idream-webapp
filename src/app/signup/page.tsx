import React from "react";
import { redirect } from "next/navigation";
import { getCookies } from "next-client-cookies/server";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ACCESS_TOKEN } from "../constants";
import Copyright from "@/components/Copyright/Copyright";
import SignupForm from "../../components/SignupForm/SignupForm";

const SignupPage = async () => {
  const cookies = getCookies();
  const accessToken = cookies.get(ACCESS_TOKEN);
  return accessToken ? (
    redirect("/dashboard")
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignupForm />
      </Box>
      <Copyright />
    </Container>
  );
};

export default SignupPage;
