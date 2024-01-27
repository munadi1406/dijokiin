"use client";
import { storeData } from "@/data/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { useState } from "react";
import CustomDrawer from "./CustomDrawer";

export default function StoreData() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const handleIsOpen = (e) => {
    setIsOpen(!isOpen);
    setCurrentData(e);
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-2 py-10">
      <CustomDrawer
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        setIsOpen={setIsOpen}
        data={currentData}
      />
      {storeData.map((e, i) => (
        <Card
          key={i}
          onClick={() => handleIsOpen(e)}
          className="cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="text-xl text-blue-600">{e.title}</CardTitle>
            <CardDescription>{`IDR ${Number(e.price).toLocaleString(
              "id-ID"
            )}`}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt={e.title}
              src={e.img}
              placeholder="blur"
              className="rounded-md w-full h-auto"
              width={500}
              height={300}
              blurDataURL={`data:image/jpeg;base64,${e.img}`}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
