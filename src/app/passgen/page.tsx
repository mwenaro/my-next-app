"use client";

import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function PassGen() {
  const [isPassword, setIsPassword] = useState(true);
  const [randomPwd, setRandomPwd] = useState("");
  function togglePwdVisibility(e: any) {
    e.preventDefault();
    setIsPassword(!isPassword);
  }

  function pwdGenerator() {
    const alha = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const str = alha + nums + alha.toUpperCase();
    const symbol = "$#@!><+*_-";

    let password =
      shuffleArray(symbol.split(""))[0] +
      shuffleArray(str.split("")).join("").substr(0, 6);

    password = shuffleArray(password.split("")).join("");
    setRandomPwd(password);
    handlePastingToClipboard(password);
    return password;
  }
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  async function handlePastingToClipboard(text: any) {
    try {
      if (!navigator.clipboard) throw Error("No clipbaord found");
      await navigator.clipboard.writeText(text);
      alert("Password Copied!");
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <div className="h-full w-full mx-auto flex flex-col items-center justify-center">
      <form className="w-full flex flex-col items-center ">
        <h3>Password Generator</h3>
        <button
          onClick={(e: any) => {
            e.preventDefault();
            console.log(pwdGenerator());
          }}
        >
          Generate
        </button>
        <div className="relative">
          <div className="flex items-center bg-slate-400 rounded-lg px-6 py-3 focus-within:outline focus-within:outline-2 focus-within:outline-black">
            <input
              value={randomPwd}
              readOnly
              type={isPassword ? "password" : "text"}
              className="bg-slate-400 border-0 focus:outline-none flex-grow"
            />
            <button
              onClick={togglePwdVisibility}
              className="focus:outline-none ml-2"
            >
              {isPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
