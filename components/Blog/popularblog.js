import React from "react";
import Image from "next/image";
import Link from "next/link";

function Popularblog() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="fs-4 font-bold">Popular Blog</h2>
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <Link href="/blogdetails">
                  <a className="card-title fs-5 font-weight-bold">
                    Lorem Ipsam Lorem Ipsam
                  </a>
                </Link>

                <p className="color-green">Sep 10, 2022</p>

                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="btn bg-green">Load more</button>
        </div>
      </div>
    </>
  );
}

export default Popularblog;
