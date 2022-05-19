import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <div className="text-slate-100 tracking-wide flex gap-5 mt-10 px-20 justify-center flex-wrap  m-auto w-screen lg:w-[40rem]">
      {Object.entries(requests).map(([key, { title }]) => (
        <h2
          className="hover:scale-105 transition cursor-pointer border-[1px] border-slate-900  tracking-wider text-slate-800 px-3 rounded-md"
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
