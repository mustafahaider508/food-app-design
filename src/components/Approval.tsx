// pages/approval.js
"use client";
import React, { useEffect, useState } from "react";
import Right from "../../public/right.png";
import Image from "next/image";
import Logo from "../../public/Afnan Recipes.png";
import Tick from "../../public/tick.png";
import Cross from "../../public/Cross.png";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "../../db";
import MyModal from "./Modal";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import {
  setApprovals,
  removeApprovals,
  updateApprovals,
} from "@/store/reducers/approval";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Approval = () => {
  const dispatch = useAppDispatch();
  // const [reels, setReels] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  let [video, setVideo] = useState<any>();

  const { approval } = useAppSelector(
    (state: RootState) => state.approvalSlice
  );

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
      const filterReels = data?.filter((ele: any) => ele.status == "pending");

      dispatch(setApprovals(filterReels));
    } catch (error: any) {
      console.error("Error connecting to Firestore:", error.message);
    }
  };

  const handleStatus = async (docs: any) => {
    const updated = doc(db, "Reels", docs.reel_id);
    await updateDoc(updated, {
      status: "Accepted",
    });

    dispatch(updateApprovals({ id: docs.reel_id, status: "Accepted" }));
    toast.success("Approved Successfully");
  };

  const handelDeleted = async (docs: any) => {
    const del = doc(db, "Reels", docs.reel_id);
    await deleteDoc(del);
    dispatch(removeApprovals({ id: docs.reel_id }));
    toast.success("Deleted");
  };

  useEffect(() => {
    handleReels();
  }, []);

  console.log("approval", approval);

  return (
    <div>
      <ToastContainer />
      {approval == null ? (
        <div className=" flex items-center justify-center h-screen">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-20 text-gray-200 animate-spin dark:text-gray-300 fill-blue-600 "
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
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
                        {approval?.map((ele: any, index: number) => (
                          <tr key={index}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {ele.user_name == null
                                ? "No Name"
                                : ele.user_name}
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
                                  onClick={() => handleStatus(ele)}
                                  className="w-[40px] cursor-pointer"
                                  src={Tick}
                                  alt="img"
                                />
                                <Image
                                  onClick={() => handelDeleted(ele)}
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
      )}
    </div>
  );
};

export default Approval;
