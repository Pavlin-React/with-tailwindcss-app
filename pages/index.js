import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  let isAuth = false;
  if (!isAuth) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Web 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to App</h1>
    </div>
  );
}
