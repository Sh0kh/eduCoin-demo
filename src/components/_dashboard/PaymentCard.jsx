import React from "react";
import { money, student } from "../../assets";

export default function PaymentsCard() {
  const percent = 42; // Progress %
  const currentAmount = 120_624_000;
  const totalAmount = 287_200_000;
  const currentCount = 1320;
  const totalCount = 3143;

  return (
    <div className="bg-white rounded-lg h-[356px] shadow-md border border-gray-100 p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[20px] md:text-xl font-semibold text-gray-900">
          Joriy oy uchun to'lovlar
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

      <div className="flex items-center justify-between h-[300px]">
        <div className="flex flex-col justify-between flex-1 pr-6 border-r max-w-[300px] border-gray-200">
          <div className="border-b w-full border-gray-200 mb-[10px] pb-4">
            <div className="flex items-center gap-2 mb-6">
              <img src={money} alt="MONEY" width={18} />
              <span className="text-sm text-gray-600">Hajmi</span>
            </div>
            <div className="text-[20px] md:text-2xl font-bold text-gray-900">
              {currentAmount.toLocaleString()} <span className="text-[14px]">so'm</span>
            </div>
            <div className="text-[16px] text-gray-400">
              {totalAmount.toLocaleString()}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={student} alt="Student" width={18} />
              <span className="text-sm text-gray-600">Soni</span>
            </div>
            <div className="text-[20px] md:text-2xl font-bold text-gray-900">
              {currentCount.toLocaleString()}
            </div>
            <div className="text-[18px] text-gray-400">
              {totalCount.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="relative w-52 h-52 flex items-center justify-center">
          <svg
            className="transform -rotate-90 "
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#EF4444"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${Math.PI * 100}`}
              strokeDashoffset={`${Math.PI * 100 * (1 - percent / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute text-3xl md:text-4xl font-bold text-gray-900">
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
}
