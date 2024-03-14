"use client";
import Link from "next/link";
import "../globals.css";

interface Data {
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  name: string;
  image: string;
}

export default function CharacterPage({
  searchParams,
}: {
  searchParams: Data;
}) {
  return (
    <div>
      <header>
        <img
          id="main-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
          alt=""
        />{" "}
        <p id="dti-love">and dti s2💞✨✨✨</p>
      </header>
      <Link href="/">Back to Home</Link>

      <h1>{searchParams.name}</h1>
      <p>Status: {searchParams.status}</p>
      <p>Species: {searchParams.species}</p>
      <p>Gender: {searchParams.gender}</p>
      <img src={searchParams.image} alt={searchParams.name} />
      <p>Location: {searchParams.location}</p>
      <p>Origin: {searchParams.origin}</p>
    </div>
  );
}
