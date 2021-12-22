import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from 'react-moralis'

export default function Home() {

  let { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Web 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to App</h1>
      <button onClick={logout} >Log Out</button>
    </div>
  );
}
