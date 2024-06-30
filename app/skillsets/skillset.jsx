"use client";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { LiaNode } from "react-icons/lia";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";

export default function Skillsetui() {
  return (
    <div>
      <div className="flex justify-center flex-col items-center mt-16 space-y-2 ">
        <h1 className="text-3xl font-bold">Skillsets</h1>
        <p>I Love and Work with this technologies</p>
      </div>

      <div className="flex justify-center flex-col mt-20 space-y-4 md:flex md:justify-center  ">
        <div className="flex justify-center space-x-16  ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className=""
          >
            <IoLogoJavascript size={160} />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <IoLogoHtml5 size={160} />
          </a>
          <a href="https://www.mongodb.com/">
            {" "}
            <DiMongodb size={160} />
          </a>
        </div>
        <div className="flex justify-center space-x-16 ">
          <a href="https://react.dev/">
            {" "}
            <GrReactjs size={160} />
          </a>
          <a href="https://nodejs.org/en">
            {" "}
            <LiaNode size={160} />
          </a>
          <a href="https://nextjs.org/">
            {" "}
            <SiNextdotjs size={160} />
          </a>
        </div>
      </div>
    </div>
  );
}
