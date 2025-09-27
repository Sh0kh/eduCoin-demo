import { useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";

export default function CreateBranch() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* ==== Open Button ==== */}
            <Button
                onClick={handleOpen}
                className="bg-[#7F56D9] flex items-center justify-center gap-[8px]"
            >
                <svg
                    className="w-[11px] h-[11px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M256 64c0-17.7-14.3-32-32-32s-32 
               14.3-32 32v160H32c-17.7 0-32 
               14.3-32 32s14.3 32 32 32h160v160c0 
               17.7 14.3 32 32 32s32-14.3 
               32-32V288h160c17.7 0 32-14.3 
               32-32s-14.3-32-32-32H256z"
                    ></path>
                </svg>
                Filial qo'shish
            </Button>

            {/* ==== Overlay ==== */}
            {open && (
                <div
                    onClick={handleClose}
                    className="fixed inset-0  z-40"
                />
            )}

            {/* ==== Sidebar Modal ==== */}
            <div
                className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex h-[100%] flex-col justify-between">
                    <div>
                        <div className="p-[24px]">
                            <div className="flex items-center justify-between ">
                                <h2 className="text-[20px] font-semibold text-[#101828]">
                                    Filial qo'shish
                                </h2>
                                <button
                                    onClick={handleClose}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <p className="text-[14px] text-[#475467] mt-[5px]">
                                Bu yerda siz yangi filialingizni qo'shishingiz mumkin.
                            </p>
                        </div>

                        {/* Body */}
                        <div className="px-[24px] flex flex-col gap-[20px]">
                            {/* Filial nomi */}
                            <label className="w-full">
                                <span className="text-[14px] font-[500] block mb-[6px]">
                                    Filial nomi
                                </span>
                                <input
                                    placeholder="Marketing site redesign"
                                    type="text"
                                    className="border-[1px] w-full border-[#D0D5DD] text-[16px] rounded-[10px] text-[#101828] px-[14px] py-[10px]"
                                />
                            </label>

                            {/* Viloyat select */}
                            <label className="w-full">
                                <span className="text-[14px] font-[500] block mb-[6px]">
                                    Viloyat
                                </span>
                                <Select>
                                    <Option>Toshkent</Option>
                                    <Option>Andijon</Option>
                                    <Option>Samarqand</Option>
                                    <Option>Farg'ona</Option>
                                    <Option>Namangan</Option>
                                </Select>
                            </label>

                            {/* Shaxar select */}
                            <label className="w-full">
                                <span className="text-[14px] font-[500] block mb-[6px]">
                                    Shaxar
                                </span>
                                <Select >
                                    <Option>Toshkent sh.</Option>
                                    <Option>Namangan sh.</Option>
                                    <Option>Andijon sh.</Option>
                                    <Option>Qo'qon sh.</Option>
                                    <Option>Samarqand sh.</Option>
                                </Select>
                            </label>

                            {/* Manzil */}
                            <label className="w-full">
                                <span className="text-[14px] font-[500] block mb-[6px]">
                                    Manzil
                                </span>
                                <input
                                    placeholder="Ko'cha, uy raqami..."
                                    type="text"
                                    className="border-[1px] w-full border-[#D0D5DD] text-[16px] rounded-[10px] text-[#101828] px-[14px] py-[10px]"
                                />
                            </label>

                            {/* Telefon raqam */}
                            <label className="w-full">
                                <span className="text-[14px] font-[500] block mb-[6px]">
                                    Telefon raqam
                                </span>
                                <input
                                    placeholder="+998 90 123 45 67"
                                    type="tel"
                                    className="border-[1px] w-full border-[#D0D5DD] text-[16px] rounded-[10px] text-[#101828] px-[14px] py-[10px]"
                                />
                            </label>
                            <div className="flex items-center justify-end ">
                                <button className="text-[#6941C6] text-[14px] flex items-center gap-[5px]">
                                    <svg
                                        className="w-[11px] h-[11px]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M256 64c0-17.7-14.3-32-32-32s-32 
               14.3-32 32v160H32c-17.7 0-32 
               14.3-32 32s14.3 32 32 32h160v160c0 
               17.7 14.3 32 32 32s32-14.3 
               32-32V288h160c17.7 0 32-14.3 
               32-32s-14.3-32-32-32H256z"
                                        ></path>
                                    </svg>
                                    Yana qo‘shish
                                </button>
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
