import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex w-full p-4 justify-center items-center gap-2">
      <p className="text-sm text-blue-600 text-center font-semibold ">
        &copy; Dijokiin - Rebahan Santai Tugas Selesai{" "}
        <span className="font-bold">{new Date().getFullYear()}</span> - Develov
        By <span className="font-bold">mun</span>
      </p>
      <Link
        href="https://github.com/munadi1406"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </Link>
    </div>
  );
}
