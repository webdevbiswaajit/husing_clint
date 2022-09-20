import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Image from "next/image";

function postOffice() {
  return (
    <>
      <Navbar />
      <div className="bg-ash py-5">
        <div className="container">
          <div className="d-flex justify-content-center mt-5">
            <Image
              height={100}
              width={100}
              src="/img/partners/postoffice.jpg"
              alt="...."
            />
          </div>
          <h2 className="color-dark fs-2 text-center mt-2">
            Post Office Bahamas
          </h2>
          <p className="color-dark fs-5">VISION</p>
          <p className="color-dark fs-6">
            The Bahamas Post Office is committed to providing high-quality
            postal service to all Bahamians. Its enthusiastic, professional
            staff will maintain a progressive organization through a commitment
            to high levels of customer satisfaction.
          </p>
          <p className="color-dark fs-5">MISSION</p>
          <p className="color-dark fs-6">
            The mission of the Bahamas Post Office is to work together to be
            recognized and respected for its timely collection and transmittal
            of postal products from and for Bahamian and international
            consumers, including businesses and other organizations. It is to
            become a fully featured market-oriented and profitable business that
            meets the customers communications, advertising, and physical
            distributional needs.
          </p>
          <p className="color-dark fs-5">OBJECTIVES</p>
          <p className="color-dark fs-6">
            The objectives of the Bahamas Post Office are as follows:
          </p>
          <ol type="" className="color-dark fs-6">
            <li>
              Maintain a superior knowledge and understanding of the marketplace
              and thereby market competitive and accessible products and
              services;
            </li>
            <li>Maintain a quality serviced policy;</li>
            <li>
              Ensure effective interconnection with the international postal
              network;
            </li>
            <li>
              Adopt cost control policies and measures to improve efficiency;
            </li>
            <li>Sustain a higher level of productivity in the workplace;</li>
            <li>
              Secure administrative and financial management independence from
              the public service bureaucracy;
            </li>
            <li>
              Encourage employees to optimize their individual and collective
              contribution as members of the customer-oriented enterprise;
            </li>
            <li>
              Continue to develop strategies in the Family Islands as well as
              New Providence;
            </li>
            <li>
              Promote the ongoing development of human resources through
              training designed for adaption to commercial function;
            </li>
            <li>
              Maintain a management approach that emphasizes teamwork and staff
              motivation;
            </li>
            <li>
              Anticipate and satisfy the requirements of our customers for
              excellent communication, distribution, financial, and other agency
              services;
            </li>
            <li>
              Earn national confidence as a responsible provider of a key part
              of our country’s social and commercial infrastructure;
            </li>
            <li>
              Ensure a positive working environment n which all of our employees
              can find joy and satisfaction, take pride in our organization, and
              feel that their views are valued; and
            </li>
            <li>
              Foster innovative product development including e-commerce service
              offerings, with the use of advanced technology and efficient
              working practice to give customers better value for money,{" "}
            </li>
          </ol>
          <p className="color-dark fs-6">than can be obtained anywhere else.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default postOffice;
