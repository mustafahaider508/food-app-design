import React from "react";
import Right from "../../public/right.png";
import Image from "next/image";
import Logo from "../../public/Afnan Recipes.png";
import Content from "../../public/Rectangle 49.png";
import Tick from "../../public/tick.png";
import Cross from "../../public/Cross.png";

function Approval() {
  const approvalData = [
    {
      user: "Ben Afleck",
      content: Content,
      description:
        "Video 05:35 Fried Crispy Chips with garlic sauce and pinch of mustard",
    },
    {
      user: "Ben Afleck",
      content: Content,
      description:
        "Video 05:35 Fried Crispy Chips with garlic sauce and pinch of mustard",
    },
    {
      user: "Ben Afleck",
      content: Content,
      description:
        "Video 05:35 Fried Crispy Chips with garlic sauce and pinch of mustard",
    },
    {
      user: "Ben Afleck",
      content: Content,
      description:
        "Video 05:35 Fried Crispy Chips with garlic sauce and pinch of mustard",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="py-6 px-8">
          {" "}
          <Image className=" w-[300px]" src={Logo} alt="img" />
          <p className="font-[600] py-2 text-[18px]">Upload Permissions</p>
        </div>
        <div className="hidden md:block absolute  right-0 top-0">
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
                    {approvalData.map((ele: any, index: number) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {ele.user}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <Image
                            className="w-[80px]"
                            src={ele.content}
                            alt="img"
                          />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {ele.description?.slice(0, 5)} <br />
                          {ele.description?.slice(5, 10)} <br />
                          {ele.description?.slice(10)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="flex items-center gap-6 ">
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
    </div>
  );
}

export default Approval;
