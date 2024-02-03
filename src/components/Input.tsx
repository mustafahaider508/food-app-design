"use client";
import React, { useState } from "react";
import Logo from "../../public/Afnan Recipes.png";
import Image from "next/image";
import Right from "../../public/right.png";

function Input({ formData, setFormData, handelAddLink, error }: any) {
  return (
    <div>
      <div className="grid grid-cols-12 px-8">
        <div className="col-span-4">
          <p className="font-[600] py-2">Add Link</p>
          <input
            className="w-[400px] h-[35px] border border-gray-400 rounded-md text-[13px] px-2"
            type="text"
            placeholder="Add Link"
            name="link"
            value={formData}
            onChange={(e: any) => setFormData(e.target.value)}
          />
          {error && (
            <p className="text-[12px] text-red-500 py-2">Link is required*</p>
          )}
        </div>
      </div>

      <div className="w-[100px] h-[35px] bg-[#D46085] mx-8 my-4 flex items-center justify-center rounded-md ">
        <button onClick={handelAddLink} className="text-white">
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
