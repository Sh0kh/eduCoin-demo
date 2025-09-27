import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function MonthlyScheduleTable() {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState("2025-01-10");

  const lessons = {
    "2025-01-01": [{ name: "Meeting", time: "10:00 AM", color: "blue" }],
    "2025-01-02": [
      { name: "Class", time: "2:00 PM", color: "green" },
      { name: "Review", time: "4:00 PM", color: "red" },
    ],
    "2025-01-10": [
      { name: "Friday standup", time: "9:00 AM", color: "blue" },
      { name: "Olivia x Riley", time: "12:00 PM", color: "purple" },
      { name: "Product demo", time: "1:30 PM", color: "green" },
    ],
    "2025-01-21": [
      { name: "Workshop", time: "9:00 AM", color: "blue" },
      { name: "Training", time: "11:00 AM", color: "green" },
      { name: "Review", time: "1:00 PM", color: "red" },
    ],
  };

  const days = ["Mon", "T", "W", "T", "F", "S", "S"];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  let firstDay = firstDayOfMonth.getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const formatDateKey = (year, month, day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const getDotColor = (color) => {
    const colors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      red: "bg-red-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
    };
    return colors[color] || "bg-gray-500";
  };

  const selectedLessons = lessons[selectedDate] || [];

  // Calendar generation
  const calendarDays = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({ day, isCurrentMonth: true });
  }
  while (calendarDays.length < 42) {
    calendarDays.push({ day: calendarDays.length - daysInMonth - firstDay + 1, isCurrentMonth: false });
  }

  const formatSelectedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 max-w-5xl mx-auto shadow-sm">
      <div className="grid grid-cols-5 gap-8 h-[508px]">
        <div className="col-span-3 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Joriy oy jadvali</h2>
            <div className="flex items-center gap-2 text-blue-600 text-sm cursor-pointer hover:text-blue-700">
              <span>Dars jadvallari</span>
              <ArrowUpRight size={16} />
            </div>
          </div>

          <div className="grid grid-cols-7 border-l border-r border-t border-gray-200 bg-gray-50">
            {days.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500 py-2 border-r border-gray-200 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 border border-gray-200 rounded-lg overflow-hidden flex-1">
            {calendarDays.map((dayObj, index) => {
              const isLastColumn = (index + 1) % 7 === 0;
              const isLastRow = index >= 35;

              const dateKey = formatDateKey(currentYear, currentMonth, dayObj.day);
              const dayLessons = lessons[dateKey] || [];
              const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, dayObj.day).toDateString();
              const isSelected = selectedDate === dateKey;

              return (
                <div
                  key={index}
                  className={`flex items-center justify-center relative transition-all 
                    ${!isLastColumn ? "border-r" : ""} 
                    ${!isLastRow ? "border-b" : ""} 
                    ${!dayObj.isCurrentMonth ? "bg-gray-50 text-gray-300" : "bg-white"}
                  `}
                  onClick={() => dayObj.isCurrentMonth && setSelectedDate(dateKey)}
                >
                  <div
                    className={`w-11 h-11 flex flex-col items-center justify-center rounded-full transition-all duration-200 cursor-pointer
                      ${
                        isSelected
                          ? "bg-purple-600 text-white shadow-lg scale-105"
                          : isToday
                          ? "ring-2 ring-purple-400 text-purple-600 font-semibold"
                          : "hover:bg-purple-50 text-gray-700"
                      }
                    `}
                  >
                    <span className="text-sm">{dayObj.day}</span>

                    {dayLessons.length > 0 && (
                      <div className="flex gap-0.5 mt-1">
                        {dayLessons.slice(0, 3).map((lesson, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? "bg-white bg-opacity-80" : getDotColor(lesson.color)
                            }`}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details */}
        <div className="col-span-2 bg-gray-50 rounded-xl p-4 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {formatSelectedDate(selectedDate)}
          </h3>
          <div className="space-y-3 overflow-y-auto">
            {selectedLessons.length > 0 ? (
              selectedLessons.map((lesson, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${getDotColor(lesson.color)}`}></div>
                      <span className="font-medium text-gray-900">{lesson.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{lesson.time}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">Bu sanada dars jadvali yo'q</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
