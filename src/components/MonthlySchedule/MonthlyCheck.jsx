import { ArrowDown, ArrowUp, X, BarChart2 } from "lucide-react";

export default function MonthlyCheck() {
  const students = Array(12).fill({
    name: "Olivia Rhye",
    birth: "10.10.2005",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  });

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-5xl h-full">
      <div className="flex justify-between items-center mb-[40px]">
        <h2 className="text-lg font-semibold">
          Bugungi darslarga kelmagan o‘quvchilar
        </h2>
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

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3 border rounded-lg p-3">
          <X className="text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">Soni</p>
            <p className="text-xl font-semibold">12</p>
            <p className="text-xs text-green-600">↓ 3 vs last month</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border rounded-lg p-3">
          <BarChart2 className="text-purple-500" />
          <div>
            <p className="text-gray-500 text-sm">Foyizda</p>
            <p className="text-xl font-semibold">8%</p>
            <p className="text-xs text-red-600">↓ 2% vs last month</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {students.map((student, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{student.name}</p>
              <p className="text-xs text-gray-500">{student.birth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
