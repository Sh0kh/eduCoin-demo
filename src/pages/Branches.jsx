import NavigateNavBar from "../components/_dashboard/NavigateNavBar";
import CreateBranch from "../components/_branches/CreateBranch";
import FilterBrach from "../components/_branches/FilterBrach";

export default function Branches() {
    return (
        <div className=''>
            <div className=" p-6 min-vh-100 bg-[#f2f4f7]">
                <NavigateNavBar />
                <div className="w-full mt-[30px]">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-[#101828] text-[30px] font-600">
                            Filiallar
                        </h1>
                        <CreateBranch />
                    </div>
                    <p className="font-[600] text-[16px] mt-2">
                        Bu sahifada filiallarni boshqarish uchun zarur bo'lgan asosiy ko'rsatkichlar va ma'lumotlarni topasiz.
                    </p>
                </div>

                {/* ==== Filters & Search ==== */}
                <div className="w-full flex items-center justify-between mt-[26px]">
                    <div className="flex items-center gap-[12px] ">
                        <button className="bg-white px-[14px] py-[10px] rounded-[5px] flex items-center gap-[10px]">
                            <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"></path><path fill="currentColor" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"></path></svg>
                            <span className="text-[14px] font-[600] text-[#667085] ">
                                Select dates
                            </span>
                        </button>
                        <FilterBrach />
                    </div>
                    <div className="flex items-center rounded-[5px] gap-[8px] w-[320px] bg-white px-[14px] py-[12px]">
                        <svg className="w-[20px] h-[20px] text-[#667085] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path></svg>
                        <label>
                            <input className="text-[16px] outline-none" type="text" placeholder="Search" />
                        </label>
                    </div>
                </div>

                {/* ==== Table ==== */}
                <div className="mt-[20px] bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#F9FAFB]">
                            <tr>
                                <th className="text-left py-[13px] px-[24px] text-[#475467] text-[12px] font-[600]">Nomi</th>
                                <th className="text-left py-[13px] px-[24px] text-[#475467] text-[12px] font-[600]">Region</th>
                                <th className="text-left py-[13px] px-[24px] text-[#475467] text-[12px] font-[600]">Guruhlar</th>
                                <th className="text-left py-[13px] px-[24px] text-[#475467] text-[12px] font-[600]">O'qituvchilar</th>
                                <th className="text-left py-[13px] px-[24px] text-[#475467] text-[12px] font-[600]">O'quvchilar</th>
                                <th className="text-left py-[13px] px-[24px] text-[#475467] text-[12px] font-[600]">Yaratilgan sana</th>
                                <th className="text-left py-[13px] px-[24px] text-[#475467] text-[12px] font-[600]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4,].map((item, index) => (
                                <tr key={index} className="border-t hover:bg-[#f9fafb] transition">
                                    <td className="py-[26px] px-4 text-[14px] text-[#101828]">Filial {index + 1}</td>
                                    <td className="py-[26px] px-4 text-[14px] text-[#101828]">Toshkent</td>
                                    <td className="py-[26px] px-4 text-[14px] text-[#101828]">
                                        <div className="flex items-center gap-[14px]">
                                            <svg className="w-[20px] h-[20px] text-[#98A2B3]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.75 2.746a.75.75 0 0 0-1.5 0V4h-2A1.75 1.75 0 0 0 7.5 5.75v2.155c1.52-.138 3 1.036 3 2.743V21.25q0 .04-.002.078V22h3v-1.25h.002v-7.5a2.75 2.75 0 0 1 2.75-2.75h.25V5.75A1.75 1.75 0 0 0 14.75 4h-2zM14.498 22h4.252a1.75 1.75 0 0 0 1.75-1.75v-7a1.75 1.75 0 0 0-1.75-1.75h-2.5a1.75 1.75 0 0 0-1.75 1.75v7.5h-.002zM9.5 20.75h-.002V22H5.25a1.75 1.75 0 0 1-1.75-1.75v-7.96c0-.59.297-1.14.79-1.463l2.5-1.641c1.163-.765 2.71.07 2.71 1.462z"></path></svg>
                                            12
                                        </div>
                                    </td>
                                    <td className="py-[26px] px-4 text-[14px] text-[#101828]">
                                        <div className="flex items-center gap-[14px]">

                                            <svg className="w-[20px] h-[18px] text-[#98A2B3]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.51 5.51 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.5 5.5 0 0 1 3.102 8.05A3.5 3.5 0 0 1 2 5.5M11 4a3.001 3.001 0 0 1 2.22 5.018a5 5 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.75.75 0 0 1-.549-.514a3.51 3.51 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4m-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5"></path></svg>
                                            123
                                        </div>
                                    </td>
                                    <td className="py-[26px] px-4 text-[14px] text-[#101828]">
                                        <div className="flex items-center gap-[14px]">
                                            <svg className="w-[20px] h-[18px] text-[#98A2B3]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.51 5.51 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.5 5.5 0 0 1 3.102 8.05A3.5 3.5 0 0 1 2 5.5M11 4a3.001 3.001 0 0 1 2.22 5.018a5 5 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.75.75 0 0 1-.549-.514a3.51 3.51 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4m-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5"></path></svg>
                                            123
                                        </div>
                                    </td>
                                    <td className="py-[26px] px-4 text-[14px] text-[#101828]">24 Jan 2022</td>
                                    <td className="py-[26px] px-4 text-[14px] text-[#101828]">
                                        <div className="flex items-center gap-[14px] w-[60px]">
                                            <button className="text-[#475467] text-[20px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3}><path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19s-7.764-4.013-9.257-5.962a1.69 1.69 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5s7.764 4.013 9.257 5.962"></path><circle cx={12} cy={12} r={3}></circle></g></svg>
                                            </button>
                                            <button className="text-[#475467] text-[20px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14.29 17.29L13 18.59V13a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42m4.13-11.07A7 7 0 0 0 5.06 8.11A4 4 0 0 0 6 16a1 1 0 0 0 0-2a2 2 0 0 1 0-4a1 1 0 0 0 1-1a5 5 0 0 1 9.73-1.61a1 1 0 0 0 .78.67a3 3 0 0 1 .24 5.84a1 1 0 1 0 .5 1.94a5 5 0 0 0 .17-9.62"></path></svg>
                                            </button>
                                            <button className="text-[#475467] text-[20px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12"><path fill="currentColor" d="M5 3h2a1 1 0 0 0-2 0M4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zM5 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M3.38 9.085a1 1 0 0 0 .997.915h3.246a1 1 0 0 0 .996-.915L9.055 4h-6.11z"></path></svg>
                                            </button>
                                            <button className="text-[#475467] text-[20px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* ==== Pagination ==== */}
                    <div className="flex items-center justify-between px-4 py-3 border-t bg-white">
                        <button className="px-[14px] py-[8px] border rounded-[8px] text-[14px] text-[#344054] font-[600] flex items-center gap-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3}><path strokeDasharray={20} strokeDashoffset={20} d="M21 12h-17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate></path><path strokeDasharray={12} strokeDashoffset={12} d="M3 12l7 7M3 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path></g></svg>
                            Previous
                        </button>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1 rounded bg-[#F9FAFB]  font-[600]">1</button>
                            <button className="px-3 py-1 rounded hover:bg-[#F9FAFB]">2</button>
                            <button className="px-3 py-1 rounded hover:bg-[#F9FAFB]">3</button>
                            <button className="px-3 py-1 rounded hover:bg-[#F9FAFB]">4</button>
                            <span className="px-2">...</span>
                            <button className="px-3 py-1 rounded hover:bg-[#F9FAFB]">8</button>
                            <button className="px-3 py-1 rounded hover:bg-[#F9FAFB]">9</button>
                        </div>
                        <button className="px-[14px] py-[8px] border rounded-[8px] text-[14px] text-[#344054] font-[600] flex items-center gap-[6px]">
                            Next
                            <svg className="rotate-[180deg]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3}><path strokeDasharray={20} strokeDashoffset={20} d="M21 12h-17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></animate></path><path strokeDasharray={12} strokeDashoffset={12} d="M3 12l7 7M3 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
