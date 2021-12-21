import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-white  ">
      <h1>I am the Login screen</h1>
      <div className="flex flex-col w-full h-4/6 justify-center items-center z-50 absolute" >
        <Image src='/P-logo.jpg' width={200} height={200} />
        <button>Welcome to META</button>
      </div>
      <div className="w-full  h-screen">
        <Image src="https://links.papareact.com/55n" objectFit='cover' layout="fill" />
      </div>
    </div>
  );
}

export default Login;
