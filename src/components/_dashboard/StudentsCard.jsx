import React from "react";
import { calendar, user } from "../../assets";

export default function StudentsCard() {
  const percent = 87;
  const totalStudents = 1847;
  const totalCount = 2123;

  return (
    <div className="bg-white col-span-2 rounded-lg shadow-md border border-gray-100 p-6 w-full h-[174px]">
      <div className="flex items-center gap-8 md:gap-12">
        <div className="relative flex-shrink-0 w-40 h-24 md:w-48 md:h-28">
          <svg width="100%" height="100%" viewBox="0 0 120 60">
            <path
              d="M 10 50 A 50 50 0 0 1 110 50"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 10 50 A 50 50 0 0 1 110 50"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${Math.PI * 50 * (percent / 100)} ${
                Math.PI * 50
              }`}
              strokeDashoffset="0"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center mt-1">
            <div className="text-2xl md:text-3xl mt-[30px] font-bold text-gray-900">
              {totalStudents.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between mb-6">
            <h3 className="text-lg w-[20px] md:text-xl font-semibold text-gray-900">
              O'quvchilar
            </h3>
            <a className="text-sm md:text-base flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors self-center">
              <span>Boshqarish</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.83337 14.1666L14.1667 5.83325M14.1667 5.83325H5.83337M14.1667 5.83325V14.1666"
                  stroke="#6941C6"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        <div className="flex w-full justify-between gap-6 md:gap-8">
          <div className="w-1/2 border-r-[1px] border-solid border-secondary">
            <div className="flex items-center gap-3 mb-[10px]">
              <img src={calendar} alt="22" width={18} />
              <div className="text-[14px] md:text-sm text-gray-500 mb-0.5">
                Davomati
              </div>
            </div>
            <div className="text-base md:text-lg font-bold text-gray-900">
              {percent} %
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex items-center gap-3 mb-[10px]">
              <img src={user} alt="22" width={18} />
              <div className="text-[14px] md:text-sm text-gray-500 mb-0.5">
                Umumiy soni
              </div>
            </div>
            <div className="text-base md:text-lg font-bold text-gray-900">
              {totalCount}{" "}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
