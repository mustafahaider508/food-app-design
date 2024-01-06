// pages/approval.js
"use client";
import React, { useEffect, useState } from "react";
import Right from "../../public/right.png";
import Image from "next/image";
import Logo from "../../public/Afnan Recipes.png";
import Tick from "../../public/tick.png";
import Cross from "../../public/Cross.png";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db";
import VideoThumbnail from "../components/VideoThumbnail";
import VideoThumbnails from "../components/VideoThumbnail";
import VideoThumbnailComp from "../components/VideoThumbnail";
import MyModal from "./Modal";

const Approval = () => {
  const [reels, setReels] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  let [video, setVideo] = useState<any>();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleReels = async () => {
    try {
      const docSnap = await getDocs(collection(db, "Reels"));
      const data: any = docSnap.docs.map((doc) => doc.data());
      setReels(data);
    } catch (error: any) {
      console.error("Error connecting to Firestore:", error.message);
    }
  };

  useEffect(() => {
    handleReels();
  }, []);

  console.log("reels", reels);

  return (
    <div>
      <div className="relative">
        <div className="py-6 px-8">
          <Image className="w-[300px]" src={Logo} alt="img" />
          <p className="font-[600] py-2 text-[18px]">Upload Permissions</p>
        </div>
        <div className="hidden md:block absolute right-0 top-0">
          <Image className="w-full" src={Right} alt="img" />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-[#D46085]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 md:w-[300px] text-left text-[20px] font-semibold text-white sm:pl-6"
                      >
                        Users
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:w-[300px] py-3.5 text-left text-[20px] font-semibold text-white"
                      >
                        Content
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-[20px] font-semibold text-white"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-[20px] font-semibold text-white"
                      >
                        Approval
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {reels.map((ele: any, index: number) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {ele.user_name == null ? "No Name" : ele.user_name}
                        </td>
                        <td
                          onClick={() => {
                            setVideo(ele.video_url);
                            openModal();
                          }}
                          className="whitespace-nowrap  cursor-pointer px-3 py-4 text-sm text-gray-500"
                        >
                          <video
                            id="video1"
                            width="50"
                            height="50"
                            className=" bg-slate-200  "
                          >
                            <source src={ele.video_url} type="video/mp4" />
                          </video>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {ele.caption}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="flex items-center lg:gap-6 xl:gap-[40px]">
                            <Image
                              className="w-[40px] cursor-pointer"
                              src={Tick}
                              alt="img"
                            />
                            <Image
                              className="w-[40px] cursor-pointer"
                              src={Cross}
                              alt="img"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        video={video}
      />
    </div>
  );
};

export default Approval;
