import { Button } from "@material-tailwind/react";
import { eduCoin, login } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // 👈 Navigation qo‘shildi
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // 👈 Navigation style

export default function LoginPage() {
  const slides = [
    {
      title: "Introducing AutoReports 2.0®",
      text: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.",
    },
    {
      title: "Seamless Growth Tools",
      text: "Unlock deep insights and data-driven decisions to scale your business without limits.",
    },
    {
      title: "Next-Level Analytics",
      text: "Gain a competitive edge with real-time reports and intuitive dashboards.",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Chap qism */}
      <div className="w-1/2 h-screen bg-white p-[32px] flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <img src={eduCoin} alt="EduCoin" width={32} height={32} />
          <span className="italic font-bold text-[20px] text-main">
            EduCoin
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[360px]">
            <div>
              <h2 className="text-[#101828] font-[600] text-[30px] mb-[12px]">
                Sign up
              </h2>
            </div>
            <div className="mt-[32px]">
              <label className="w-full">
                <span className="text-[14px] text-[#344054] font-[500] block mb-[6px]">
                  Name*
                </span>
                <input
                  placeholder="Enter your name"
                  type="text"
                  className="border-[1px] shadow-sm w-full border-[#D0D5DD] text-[16px] rounded-[10px] text-[#101828] px-[14px] py-[10px]"
                />
              </label>
              <label className="w-full block mt-[20px]">
                <span className="text-[14px] text-[#344054] font-[500] block mb-[6px]">
                  Email*
                </span>
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="border-[1px] shadow-sm w-full border-[#D0D5DD] text-[16px] rounded-[10px] text-[#101828] px-[14px] py-[10px]"
                />
              </label>
              <label className="w-full block mt-[20px]">
                <span className="text-[14px] text-[#344054] font-[500] block mb-[6px]">
                  Password*
                </span>
                <input
                  placeholder="Create a password"
                  type="password"
                  className="border-[1px] shadow-sm w-full border-[#D0D5DD] text-[16px] rounded-[10px] text-[#101828] px-[14px] py-[10px]"
                />
                <span className="block mt-[6px] text-[#475467] text-[14px]">
                  Must be at least 8 characters.
                </span>
              </label>
              <Button className="bg-[#7F56D9] p-3 text-[16px] normal-case flex items-center justify-center gap-[8px] mt-[34px] w-full">
                Get started
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[15px] text-[#475467]">© EduCoin 2025</span>
          <span className="text-[15px] text-[#475467] flex items-center gap-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
              ></path>
            </svg>
            EduCoin@EduCoin.com
          </span>
        </div>
      </div>

      {/* O'ng qism */}
      <div className="w-1/2 h-screen rounded-l-[80px] bg-gradient-to-t from-[#7028E4] to-[#E5B2CA] flex flex-col items-center justify-center relative">
        <img src={login} alt="foto" />

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
            bulletActiveClass: "!bg-white !opacity-100",
          }}
          autoplay={{ delay: 4000 }}
          loop
          className="mt-[32px] w-full max-w-[500px] text-center relative pb-[60px]"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-[24px] font-[600] text-[#FFFFFF]">
                  {slide.title}
                </h2>
                <p className="text-[#E9D7FE] text-[16px] w-[456px] mx-auto">
                  {slide.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
