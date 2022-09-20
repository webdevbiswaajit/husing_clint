import React from "react";
import Navbar from "components/Navbar";
import Gallery from "components/GallaryCard";
import Footer from "components/Footer";

function gallery() {
  return (
    <>
      <Navbar />
      <div className="bg-blue text-center py-5">
        <h2 className="fs-1">Gallery</h2>
      </div>
      <Gallery />
      <Footer />
    </>
  );
}

export default gallery;
