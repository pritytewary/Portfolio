"use client";

import { useState } from "react";

export default function Contactui() {
  const [data, setdata] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contact = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      alert("Message was sent");
    } else {
      alert(json.message);
    }
  };

  return (
    <div className="  ">
      <div className="flex mt-8 px-44 justify-center items-center flex-col">
        <h1 className="text-5xl font-bold">Hello</h1>
        <div className="space-y-4 font-bold text-2xl">
          <div className="flex flex-col  space-y-2 justify-center ">
            <label htmlFor="name">I'm</label>
            <input
              type="text"
              className="border-3 border-black bg-gray-300 px-32 py-2 rounded-2xl"
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col  space-y-2 justify-center">
            <label htmlFor="contacting">and contacting you because,</label>
            <select
              name=""
              id="contacting"
              className="border-3 border-black bg-gray-300  px-32 py-2 rounded-2xl"
              value={data.subject}
              onChange={(e) => {
                setdata({ ...data, subject: e.target.value });
              }}
            >
              <option value="I wanted to say Hi">I wanted to say Hi</option>
              <option value="I wanted to give you a job">
                I wanted to give you a job
              </option>
              <option value="Something Product Related">
                Something Product Related
              </option>
              <option value="To appreciate your work">
                To appreciate your work
              </option>
            </select>
          </div>
          <div className="flex flex-col  space-y-2 justify-center">
            <label htmlFor="email-address">Here is my Email Address:</label>
            <input
              type="text"
              className="border-3 border-black bg-gray-300 px-32 py-2 rounded-2xl"
              value={data.email}
              onChange={(e) => setdata({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col  space-y-2 justify-center">
            <label htmlFor="subjects">I wanted to tell you this</label>
            <textarea
              type="text"
              className="border-3 border-black bg-gray-300 px-32 py-2 rounded-2xl"
              rows={3}
              value={data.message}
              onChange={(e) => setdata({ ...data, message: e.target.value })}
            />
          </div>

          <div>
            <button
              className="bg-black text-white text-2xl px-56 py-2 rounded-2xl hover:bg-gray-500"
              onClick={contact}
            >
              Send to Prity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
