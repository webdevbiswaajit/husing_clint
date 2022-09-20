import Image from "next/image";
function Blogcard() {
  return (
    <>
      <div className="container">
        <h2 className="fs-4 mt-5 font-bold">Latest Blog</h2>
        <div className="row">
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
      </div>
    </>
  );
}

export default Blogcard;
