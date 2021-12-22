import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  let { authenticate } = useMoralis();
  return (
    <div className="bg-black relative  ">
      <h1>I am the Login screen</h1>
      <div className="flex flex-col w-full h-4/6 justify-center items-center z-50 absolute space-y-4">
        <Image
          src="/P-logo.jpg"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
        <button
          className="bg-blue-600 rounded-lg p-5 font-bold animate-pulse"
          onClick={authenticate}
        >
          Login to METAVERSE
        </button>
      </div>
      <div className="w-full  h-screen">
        <Image src="https://links.papareact.com/55n" layout="fill" />
      </div>
    </div>
  );
}

export default Login;
