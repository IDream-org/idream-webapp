import React from "react";
import { redirect } from "next/navigation";
import { getCookies } from "next-client-cookies/server";

import { ACCESS_TOKEN } from "../constants";
import SigninForm from "../../components/SigninForm/SigninForm";

const SigninPage = async () => {
  const cookies = getCookies();
  const accessToken = cookies.get(ACCESS_TOKEN);
  return accessToken ? redirect("/dashboard") : <SigninForm />;
};

export default SigninPage;
