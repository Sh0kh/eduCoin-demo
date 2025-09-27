import { Select, Option, IconButton, Avatar } from "@material-tailwind/react";
import { PiBell } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex w-[240px] flex-col gap-6">
          <Select
            size="md"
            value="Filial"
            className="!border-gray-300 text-gray-600  text-[16px] rounded-lg !border  shadow-sm shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black focus:!border-main focus:!border-t-main focus:ring-gray-900/10"
            containerProps={{
              className: "my-1 h-[44px] bg-white !rounded",
            }}
            labelProps={{
              className: "hidden",
            }}
            onSelect={"Material Tailwind HTML"}
          >
            <Option>Tailwind HTML</Option>
            <Option>Tailwind React</Option>
            <Option>Tailwind Vue</Option>
            <Option>Tailwind Angular</Option>
            <Option>Tailwind Svelte</Option>
          </Select>
        </div>

        <div className="flex items-center gap-2">
            <IconButton variant="" className="bg-white w-12 h-12 ">
               <IoSettingsOutline className="text-2xl text-formtext" />
            </IconButton>
            <IconButton variant="" className="bg-white w-12 h-12 ">
               <PiBell className="text-2xl text-formtext" />
            </IconButton>
            <div className="w-12 h-11 ml-2">
            <Avatar  src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
            </div>
        </div>
      </div>
    </div>
  );
}
