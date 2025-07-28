import React from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import BookAppointment from "../components/BookAppointment/BookAppointment";

const page = () => {
  return (
    <div className="pt-20 pb-5 px-2 md:px-20 text-white container bg-[#010913] mt-5">
      <PageBanner
        title="Book Appointments"
        description="Explore our premium salon services tailored just for you."
        bgImage="/assets/banner/appoint.png"/>
      <BookAppointment />
    </div>
  );
};

export default page;
