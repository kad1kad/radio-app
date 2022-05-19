import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <div className=" flex gap-5 mt-10 px-20 justify-center flex-wrap  m-auto w-screen lg:w-[40rem]">
      {Object.entries(requests).map(([key, { title }]) => (
        <h2
          className="hover:scale-105 transition cursor-pointer border-2 border-sky-600 px-3 rounded-md"
          key={key}
          onClick={() => router.push(`/?genre=${key}`)}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}

export default Nav;
