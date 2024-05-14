import { redirect } from "next/navigation";
import { getCookies } from "next-client-cookies/server";
import { ACCESS_TOKEN } from "./constants";

const Home = async () => {
  const cookies = getCookies();
  const accessToken = cookies.get(ACCESS_TOKEN);
  return accessToken ? redirect("/dashboard") : redirect("/signin");
};

export default Home;
