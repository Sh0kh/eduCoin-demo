import { Button, Input, Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { PiCalendarBlankLight } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import FilterBrach from "../_branches/FilterBrach";

const data = [
  {
    label: "O'quvchilar",
    value: "lc",
  },
  {
    label: "O'qituvchilar",
    value: "school",
  },
];

export default function HeaderSearch() {
  return (
    <div>
       <div className="mt-4">
        <h1 className="text-[30px] font-semibold">Salom, Muhammad!</h1>
        <p className="text-[#475467] text-[16px]">
          Bu erda siz asosli echimlar uchun asosiy ko'rsatkichlar va
          ma'lumotlarni topasiz. Strategiyalaringizni optimallashtirishni
          boshlang!
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-6 items-center mt-4">
          <Tabs
            value="lc"
            className="w-[214px] bg-[#F9FAFB] rounded-sm shadow-sm"
          >
            <TabsHeader className="bg-gray-100">
              {data.map(({ label, value }) => (
                <Tab
                  className="p-2 text-[14px] font-medium rounded text-gray-600"
                  key={value}
                  value={value}
                  activeClassName="!bg-white !text-black shadow-sm"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>

          <Button className="bg-white text-black flex items-center gap-2 normal-case">
            <PiCalendarBlankLight size={15} />
            <span> Joriy oy</span>
          </Button>

          <FilterBrach/>
        </div>

        <div className="relative w-[320px] bg-white rounded-lg">
          {/* Search Icon */}
          <RiSearch2Line className="absolute z-20 top-1/2 left-3 -translate-y-1/2 text-black" />

          {/* Input */}
          <Input
            placeholder="Search"
            className="!pl-10 !border-gray-300 text-gray-600 text-[16px] rounded-lg !border bg-white shadow-sm shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-400 focus:!border-main focus:!border-t-main focus:ring-gray-900/10"
            labelProps={{ className: "hidden" }}
          />
        </div>
      </div>
    </div>
  )
}
