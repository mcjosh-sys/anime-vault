"use client";

import Image from "next/image";
import "../app/globals.css";
import search from "../assets/search.svg";
import { useState } from "react";
import AnimeCards from "./AnimeCards";

const Search = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setText(e.target.value);
    }
  };
  return (
    <>
      <div className="search">
        <Image src={search} alt="search" className="search__icon" />
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
    </>
  );
};

export default Search;
