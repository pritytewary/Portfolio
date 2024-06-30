"use client";
import Image from "next/image";
import { BsBrowserEdge } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa6";

export default function Workui() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-16 space-y-3">
        <h1 className="text-3xl font-bold">My Works</h1>
        <p className="text-lg ">
          Some of my works which I love are listed here, other Open Sourced
          projects can be found on my Github...
        </p>
      </div>
      <div className="flex justify-between space-x-32 items-center mt-24 rounded-3xl bg-slate-200 py-24 mx-96 shadow-xl shadow-slate-400 hover:scale-110 duration-300 hover:shadow-xl hover:shadow-slate-700">
        <div className="ml-12">
          <h1>My Portfolio</h1>
          <p>You can check my profile</p>
          <div className="flex mt-12 space-x-4">
            <a href="">
              <BsBrowserEdge
                size={50}
                className="bg-black border text-white p-2 rounded"
              />
            </a>
            <a href="https://github.com/pritytewary/pritytewary.github.io">
              <FaGithubAlt
                size={50}
                className="bg-black border text-white p-2 rounded"
              />
            </a>
          </div>
        </div>

        <div className="mr-10">
          <Image
            src={"/assets/portfolio.png"}
            width={300}
            height={300}
            className="mr-12"
          />
        </div>
      </div>
    </div>
  );
}
