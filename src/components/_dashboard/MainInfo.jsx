import React, { useEffect } from "react";
import StudentsCard from "./StudentsCard";
import PaymentsCard from "./PaymentCard";
import CoinInfo from "./CoinInfo";
import Aos from "aos";
import MonthlySchedule from "../MonthlySchedule/MonthlySchedule";
import MonthlyCheck from "../MonthlySchedule/MonthlyCheck";

export default function MainInfo() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="flex flex-col gap-4 col-span-3">
          <div data-aos="fade-up">
            <StudentsCard />
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="2500"
          >
            <CoinInfo />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
          className="col-span-2"
        >
          <PaymentsCard />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div>
          <MonthlySchedule />
        </div>
        <div>
          <MonthlyCheck />
        </div>
      </div>
    </div>
  );
}
