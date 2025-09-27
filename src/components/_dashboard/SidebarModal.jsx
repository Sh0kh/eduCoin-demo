import React from "react";
import { List, ListItem, Typography } from "@material-tailwind/react";
import { RiHome6Line, RiCheckboxMultipleLine } from "react-icons/ri";
import { SlLayers } from "react-icons/sl";
import { TbCalendarFilled } from "react-icons/tb";
import { GrDiamond, GrAnnounce } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";

export default function SidebarModal({ open, onClose }) {
    const sidebarWidth = 288; // ширина Sidebar (w-72 Tailwind)

    const modalMenuItems = [
        { icon: RiHome6Line, label: "Profil" },
        { icon: TbCalendarFilled, label: "Sozlamalar" },
        { icon: RxDashboard, label: "Statistika" },
        { icon: GrDiamond, label: "Hisobotlar" },
        { icon: SlLayers, label: "Jarayonlar" },
        { icon: RiCheckboxMultipleLine, label: "Sinovlar" },
        { icon: GrAnnounce, label: "Xabarlar" },
    ];

    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0  z-20"
                    onClick={onClose}
                />
            )}

            {/* Modal */}
            <div
                className={`fixed z-[999px] top-0 h-screen w-[260px] bg-white shadow-lg border-l rounded-r-2xl transition-transform duration-500 ease-in-out ${open ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                style={{
                    left: `${sidebarWidth}px`,
                    transform: open ? "translateX(-3px)" : "translateX(-260px)",
                    zIndex: 30, // 🔽 ниже чем Sidebar
                }}
                onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрывал
            >
                <div className="p-4 flex flex-col h-full">
                    {/* Навигация внутри модалки */}
                    <nav className="flex-1 w-full py-4 overflow-y-auto">
                        <List className="p-0 min-w-full">
                            {modalMenuItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-200"
                                >
                                    <item.icon size={20} />
                                    <Typography className="font-medium text-[14px]">
                                        {item.label}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                </div>
            </div>
        </>
    );
}
