"use client";
import Approval from "@/components/Approval";
import Login from "@/components/Login";
import Image from "next/image";
import db from "../../db";
import { useEffect } from "react";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

export default function Home() {
  return (
    <div>
      {" "}
      <Login />
    </div>
  );
}
