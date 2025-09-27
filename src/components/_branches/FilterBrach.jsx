import { useState } from "react";
import { Button, Select, Option, Checkbox } from "@material-tailwind/react";
import { IoFilterSharp } from "react-icons/io5";

export default function FilterBrach() {
  const [open, setOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const viloyatlar = [
    "Toshkent",
    "Andijon",
    "Farg'ona",
    "Namangan",
    "Samarqand",
  ];

  const toggleRegion = (region) => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((item) => item !== region)
        : [...prev, region]
    );
  };

  return (
    <>
      {/* ==== Open Button ==== */}
      <Button onClick={handleOpen} className="bg-white text-black flex items-center gap-2 normal-case">
        <IoFilterSharp size={15} />
        <span> Filter</span>
      </Button>

      {/* ==== Overlay ==== */}
      {open && <div onClick={handleClose} className="fixed inset-0 z-40" />}

      {/* ==== Sidebar Modal ==== */}
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-[100%] flex-col justify-between">
          <div>
            {/* Header */}
            <div className="p-[24px]">
              <div className="flex items-center justify-between ">
                <h2 className="text-[20px] font-semibold text-[#101828]">
                  Filters
                </h2>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-[14px] text-[#475467] mt-[5px]">
                Apply filters to table data.
              </p>
            </div>

            {/* Body */}
            <div className="px-[24px] flex flex-col gap-[20px]">
              {/* Example Select */}
              <label className="w-full">
                <Select>
                  <Option>Toshkent sh.</Option>
                  <Option>Namangan sh.</Option>
                  <Option>Andijon sh.</Option>
                  <Option>Qo'qon sh.</Option>
                  <Option>Samarqand sh.</Option>
                </Select>
              </label>

              {/* Search Input */}
              <label className="w-full">
                <span className="text-[14px] font-[500] block mb-[6px]">
                  Viloyat qidirish
                </span>
                <div className="flex items-center gap-[8px] border-[1px] w-full border-[#D0D5DD] text-[16px] rounded-[10px] text-[#101828] px-[14px] py-[10px]">
                  <svg
                    className="w-[20px] h-[20px] text-[#667085]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.3}
                      d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                    ></path>
                  </svg>
                  <input
                    placeholder="Viloyat nomi..."
                    type="text"
                    className="w-full outline-none"
                  />
                </div>
              </label>

              {/* Viloyat list with checkboxes */}
              <div className="flex flex-col gap-[10px] max-h-[250px] overflow-y-auto border-t pt-[10px]">
                {viloyatlar.map((region, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-[10px] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => toggleRegion(region)}
                      className="w-[16px] h-[16px] accent-[#7F56D9] cursor-pointer"
                    />
                    <span className="text-[15px] text-[#344054]">{region}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-[24px] py-[16px] border-t mt-[20px] flex justify-end gap-[10px]">
            <Button
              onClick={handleClose}
              variant="outlined"
              className="border-[#D0D5DD] text-[#344054]"
            >
              Bekor qilish
            </Button>
            <Button className="bg-[#7F56D9]">Saqlash</Button>
          </div>
        </div>
      </div>
    </>
  );
}
