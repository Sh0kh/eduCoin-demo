// Sidebar.jsx
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RxLightningBolt, RxDashboard } from "react-icons/rx";
import { RiHome6Line, RiCheckboxMultipleLine } from "react-icons/ri";
import { SlLayers } from "react-icons/sl";
import { TbCalendarFilled } from "react-icons/tb";
import { GrDiamond, GrAnnounce } from "react-icons/gr";
import { eduCoin } from "../../assets";

import Subscripton from "../../assets/images/subscription.png";
import SidebarModal from "./SidebarModal";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Asosiy");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: RiHome6Line, label: "Asosiy", path: "/" },
    { icon: TbCalendarFilled, label: "Dars jadvallari", path: "/lesson-schedule" },
    { icon: RxDashboard, label: "Boshqarish", path: "/branches" },
    { icon: GrDiamond, label: "Mahsulotlar", path: "/products" },
    { icon: SlLayers, label: "Lidlar", path: "/classes" },
    { icon: RiCheckboxMultipleLine, label: "Test" },
    { icon: GrAnnounce, label: "Xabar yuborish" },
  ];

  const data = [
    { label: "O'quv markaz", value: "lc" },
    { label: "Xususiy maktab", value: "school" },
  ];

  const handleMenuClick = (label) => {
    setActiveTab(label);
    if (label === "Boshqarish") {
      setModalOpen(!modalOpen);
    }
  };

  return (
    <>
      <div
        className={`w-72 bg-white fixed top-0 left-0 z-50 h-screen overflow-y-auto border-r border-gray-100 flex flex-col ${
          modalOpen ? "rounded-[0px] shadow-none" : "rounded-r-[20px] shadow-lg"
        }`}
      >
        {/* Header */}
        <div className="pt-6 px-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <img src={eduCoin} alt="EduCoin" width={32} height={32} />
            <span className="italic font-bold text-[20px] text-main">
              EduCoin
            </span>
          </div>

          <Tabs value="lc" className="w-full bg-[#F9FAFB] rounded-sm shadow-sm">
            <TabsHeader className="bg-gray-100">
              {data.map(({ label, value }) => (
                <Tab
                  className="p-2 text-[14px] font-medium rounded text-gray-600"
                  key={value}
                  value={value}
                  activeClassName="bg-white !text-black shadow-sm"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-2">
          <List className="p-0">
            {menuItems.map((item, index) => (
              <Link to="">
                <ListItem
                  key={index}
                  onClick={() => handleMenuClick(item.label)}
                  className={`flex max-w-[250px] items-center gap-3 mx-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeTab === item.label
                      ? "!bg-main !text-white shadow-sm"
                      : "text-primaryText hover:bg-gray-50 hover:text-gray-800"
                  }`}
                  ripple={true}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  <Typography className="font-medium text-[14px]">
                    {item.label}
                  </Typography>
                </ListItem>
              </Link>
            ))}
          </List>
        </nav>

        {/* Bottom Stats Card */}
        <div className="p-4 flex flex-col gap-4">
          <div className="coin-card bg-cardBg p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={eduCoin} alt="EduCoin" width={20} height={20} />
                <span className="text-[14px]">Coin</span>
              </div>
              <a href="" className="text-[14px] font-semibold text-main">
                Batafsil
              </a>
            </div>
            <h2 className="amount text-[30px] font-semibold mt-5">2,000</h2>
          </div>

          <div className="coin-card bg-cardBg p-4 rounded-lg shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex">
                <img
                  src={Subscripton}
                  alt="Subscription"
                  width={64}
                  height={64}
                />
                <div>
                  <h2 className="text-[14px] text-medium">Subscription</h2>
                  <p className="text-[12px] text-gray-600">
                    You can renew your premium subscription.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="slider w-[135px] h-[8px] rounded-full bg-secondary">
                  <div className="h-full w-[80%] bg-main rounded-full"></div>
                </div>
                <h2 className="text-[12px]">1y 4m 12h</h2>
              </div>

              <div className="flex justify-between items-center">
                <Button className="bg-white text-black flex items-center gap-2 normal-case">
                  <RxLightningBolt size={15} />
                  <span> Upgrade now</span>
                </Button>

                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.5 7.5L17.5 2.5M17.5 2.5H12.5M17.5 2.5L10.8333 9.16667M8.33333 4.16667H6.5C5.09987 4.16667 4.3998 4.16667 3.86502 4.43915C3.39462 4.67883 3.01217 5.06129 2.77248 5.53169C2.5 6.06647 2.5 6.76654 2.5 8.16667V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H11.8333C13.2335 17.5 13.9335 17.5 14.4683 17.2275C14.9387 16.9878 15.3212 16.6054 15.5608 16.135C15.8333 15.6002 15.8333 14.9001 15.8333 13.5V11.6667"
                      stroke="#6941C6"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <SidebarModal open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;
