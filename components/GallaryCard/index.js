import Image from "next/image";
const styling = {
  backgroundImage: `url('/img/signup-screen.png')`,
  width: "100%",
  height: "230px",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

function Gallery() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <nav className="mb-5  tab_menu">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Image Gallery
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Video Gallery
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="row">
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button className="btn bg-green">Load More</button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="row">
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="card card-shadow">
                  <div className="card_img" style={styling}></div>
                  <div className="p-3">
                    <h2 className="color-blue  fs-5">
                      Lorem Ipsam Lorem Ipsam
                    </h2>
                    <p className="color-dark fs-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
