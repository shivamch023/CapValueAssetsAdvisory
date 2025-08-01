import React from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import SalonGallery from "../components/SalonGallery/SalonGallery";

const page = () => {
  return (
    <div className="pt-20 pb-5 px-2 md:px-20 text-white container bg-[#010913] mt-5">
      <PageBanner
        title="Glamour Gallery"
        description="Discover stunning transformations and styles crafted by our expert salon artists."
        bgImage="/assets/banner/gallery.jpg"
      />
      <SalonGallery />
    </div>
  );
};

export default page;
