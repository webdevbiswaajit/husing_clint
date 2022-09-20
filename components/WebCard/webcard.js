import Image from "next/image";
import Link from "next/link";

function WebCard() {
  return (
    <>
      <div className="bg-light py-5">
        <h2 className="color-dark fs-2 text-center mt-2">
          Visit Other Websites
        </h2>
        <p className="color-dark fs-6 text-center">
          Check out some of our websites
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className=" ">
                <div className="card card-shadow  p-4">
                  <div className="text-center">
                    <Image
                      src="/img/partners/Logo 01.png"
                      alt=""
                      height={150}
                      width={150}
                    />
                  </div>
                  <p className="color-dark fs-6 text-center mt-3">
                    Department of Meteorology
                  </p>
                </div>
                <div className="text-center bg-green py-2 webcard">
                  <Link href="/other-site/meteorology">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" ">
                <div className="card card-shadow  p-4">
                  <div className="text-center">
                    <Image
                      src="/img/partners/roadtrafic.jpg"
                      alt=""
                      height={150}
                      width={150}
                    />
                  </div>
                  <p className="color-dark fs-6 text-center mt-3">
                    Department of Road Traffic
                  </p>
                </div>
                <div className="text-center bg-green py-2 webcard">
                  <Link href="/other-site/roadtraffic">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" ">
                <div className="card card-shadow  p-4">
                  <div className="text-center">
                    <Image
                      src="/img/partners/postoffice.jpg"
                      alt=""
                      height={150}
                      width={150}
                    />
                  </div>
                  <p className="color-dark fs-6 text-center mt-3">
                    Post Office Bahamas
                  </p>
                </div>
                <div className="text-center bg-green py-2 webcard">
                  <Link href="/other-site/postOffice">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebCard;
