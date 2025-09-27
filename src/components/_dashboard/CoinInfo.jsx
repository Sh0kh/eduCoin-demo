import React from "react";
import { avatar, coinNotify } from "../../assets";
import { IconButton } from "@material-tailwind/react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function CoinInfo() {
  const birthdays = [
    { id: 1, name: "Olivia Rhye", date: "10.10.2005", img: "/avatar1.png" },
    { id: 2, name: "James Doe", date: "12.11.2004", img: "/avatar2.png" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-h-[180px]">
      <div className="rounded-lg shadow-md max-h-[170px]">
        <img
          src={coinNotify}
          alt="banner"
          className="w-full rounded-lg h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6  flex flex-col">
        <h3 className="text-[20px] md:text-xl font-semibold text-gray-900 mb-2">
          Tug‘ilgan kunlar
        </h3>

        <div className="flex-1 flex items-center justify-between bg-gray-50 rounded-xl px-3 py-1">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
              <img
                // src={avatar}
                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{birthdays[0].name}</p>
              <p className="text-xs text-gray-500">{birthdays[0].date}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <IconButton size="sm" className="bg-white">
              <FaChevronLeft className="text-black" />
            </IconButton>
            <IconButton size="sm" className="bg-white">
              <FaChevronRight className="text-black" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
