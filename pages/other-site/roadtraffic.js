import React from "react";
import Image from "next/image";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function Roadtraffic() {
  return (
    <>
      <Navbar />
      <div className="bg-ash py-5">
        <div className="container">
          <div className="d-flex justify-content-center mt-5">
            <Image
              height={100}
              width={100}
              src="/img/partners/roadtrafic.jpg"
              alt="...."
            />
          </div>
          <h2 className="color-dark fs-2 text-center mt-2">
            Department of Road Traffic
          </h2>
          <p className="color-dark fs-5">Our Vision:</p>

          <p className="color-dark fs-6">
            A customer centric, results-driven, transparent regulatory and
            licensing organization, that exceeds expectations while working in
            the best interest of the general public.
          </p>
          <p className="color-dark fs-5">Our Mission:</p>
          <p className="color-dark fs-6">
            The Road Traffic Department is committed to providing a safe,
            sustainable and efficient transportation system through the
            enforcement of laws, responsible management, education and
            outstanding employee performance.
          </p>
          <p className="color-dark fs-5">Our Core Values:</p>
          <ul className="color-dark fs-6">
            <li>Quality Customer Service</li>
            <li>Integrity and Accountability</li>
            <li>
              Respect and consideration for both internal and external customers
            </li>
            <li> Employee welfare and Personal development</li>
            <li> Teamwork – the key to success!</li>
          </ul>
          <p className="color-dark fs-5">We Provide:</p>
          <ul className="color-dark fs-6">
            <li>Learners Permit/Provisional Licence</li>
            <li>Driving Tests (Theory and Practical)</li>
            <li>Driver’s Licences</li>
            <li> Vehicle Registration and Inspection</li>
            <li> Public Service Transportation Services</li>
          </ul>

          <p className="color-dark fs-6">
            The mission of the Bahamas Post Office is to work together to be
            recognized and respected for its timely collection and transmittal
            of postal products from and for Bahamian and international
            consumers, including businesses and other organizations. It is to
            become a fully featured market-oriented and profitable business that
            meets the customers communications, advertising, and physical
            distributional needs.
          </p>
          <p className="color-dark fs-5">Hours of Operation:</p>

          <p className="color-dark fs-6">
            Monday to Friday <br /> 9:00 am to 4:00 pm. <br /> (These times are
            adjusted from 8am to 4pm at month end, beginning 2 business days
            before the end of the month and 2 working days after.) We are closed
            on weekends and public holidays
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Roadtraffic;
