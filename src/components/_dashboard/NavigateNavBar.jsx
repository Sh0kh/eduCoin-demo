import { Select, Option, IconButton, Avatar } from "@material-tailwind/react";
import { PiBell } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

export default function NavigateNavBar() {
    return (
        <div className="">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                    <button className="flex items-center gap-[8px] ">
                        <svg className="w-[15px] h-[15px] text-[#667085]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="M27.627 2.27a8.93 8.93 0 0 0-7.254 0C12.9 5.59 7.25 9.945 4.326 12.464c-1.884 1.623-2.898 3.928-3.023 6.31A220 220 0 0 0 1 29.977c0 3.452.098 6.78.206 9.39a7.69 7.69 0 0 0 7.442 7.395c3.482.119 8.64.237 15.352.237s11.87-.118 15.352-.237a7.69 7.69 0 0 0 7.442-7.396c.108-2.608.206-5.937.206-9.39c0-4.487-.166-8.585-.303-11.202c-.125-2.382-1.139-4.688-3.023-6.31c-2.925-2.52-8.575-6.873-16.047-10.194m-5.63 3.655a4.93 4.93 0 0 1 4.005 0C33 9.035 38.32 13.13 41.064 15.495c.981.845 1.565 2.091 1.638 3.488c.135 2.574.298 6.598.298 10.994c0 3.38-.096 6.652-.202 9.224a3.69 3.69 0 0 1-3.583 3.563C35.777 42.882 30.665 43 24 43s-11.777-.118-15.215-.236a3.69 3.69 0 0 1-3.582-3.562A228 228 0 0 1 5 29.977c0-4.396.163-8.42.298-10.994c.073-1.397.657-2.643 1.638-3.488C9.681 13.13 15 9.035 21.998 5.925M16 34.489a2.5 2.5 0 0 0 0 5h16a2.5 2.5 0 0 0 0-5z" clipRule="evenodd"></path></svg>

                        <svg className=" text-[#D0D5DD]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path></g></svg>
                    </button>
                    <button className="flex items-center gap-[8px]">
                        <span className="text-[14px] text-[#475467] font-[500]">
                            Boshqarish
                        </span>
                        <svg className=" text-[#D0D5DD]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path></g></svg>
                    </button>
                    <button className="flex items-center gap-[8px] bg-[white] px-[8px] py-[4px] rounded-[8px]">
                        <span className="text-[14px] text-[#475467] font-[500]">
                            Boshqarish
                        </span>

                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <IconButton variant="" className="bg-white w-12 h-12 ">
                        <IoSettingsOutline className="text-2xl text-formtext" />
                    </IconButton>
                    <IconButton variant="" className="bg-white w-12 h-12 ">
                        <PiBell className="text-2xl text-formtext" />
                    </IconButton>
                    <div className="w-12 h-11 ml-2">
                        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}
