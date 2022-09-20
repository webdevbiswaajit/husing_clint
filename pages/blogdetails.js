import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Image from "next/image";
function Blogdetails() {
  const styling = {
    width: "100%",
    height: "560px",
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient  py-5">
        <h2 className="fs-2 text-center">Blog</h2>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <Image src="/blog.jpg" height={550} width={960} alt="" />
            <h2 className="fs-5 mt-2">
              Nature Photos That Show Off The Beauty Of The Bahamas
            </h2>
            <p className="color-green fs-6">Sep 10, 2022</p>

            <p className="fs-6">
              The Bahamas is known for its brilliant turquoise waters and
              pristine white sand beaches, but its natural beauty extends far
              beyond the beach. We’ve scoured our #InstaParadise archive for ten
              nature photos that showcase the beautiful blooms and trees you’ll
              see when exploring Nassau Paradise Island. Whether you’re enjoying
              one of our Eco Tours, heading to a nearby cay on a boating
              excursion, or simply exploring the grounds of your Bahamas hotel
              or resort, we think you’ll find that beauty is all around when
              you’re in Paradise!
            </p>
            <h3 className="fs-6">PALM TREES OCEAN BREEZE</h3>
            <p className="fs-6">
              There are several species of palm trees throughout the tropics and
              Islands of The Bahamas. Keep your eyes peeled for a silver top
              palm—you can identify it by the silvery hairs on the underside of
              its leaves. And don’t forget to try a refreshing coconut drink
              when you’re lounging at one of our beautiful beaches in Nassau
              Paradise Island!
            </p>
            <p className="fs-6">
              There’s nothing like the sight of a tropical sun shining through
              palm leaves to make you realize you’re in Paradise.
            </p>

            <h3 className="fs-6">BOUGAINVILLEA</h3>
            <p className="fs-6">
              These lovely small flowers can be found all throughout Nassau
              Paradise Island and the islands of the Caribbean. You’ll find
              these paper-thin flowers blooming on dense thorny bushes and vines
              all throughout the year. They come in a wide variety of colors,
              too: pure white, bright oranges and yellows, deep pinks and
              purples…How many can you spot?
            </p>

            <p className="fs-6">
              We love how you can see the water droplets on the bougainvillea’s
              delicate petals in this shot taken just after a tropical shower.
            </p>
            <h3 className="fs-6">YELLOW ELDER</h3>
            <p className="fs-6">
              The yellow elder is the national flower of The Bahamas. These
              trumpet-shaped yellow flowers grow in clusters and bloom
              throughout the year. Keep your eyes peeled for these blooms as you
              take a walking tour of Nassau or while you stroll to a restaurant
              with a view for lunch.
            </p>
            <p className="fs-6">
              The yellow elder is not only recognizable by the color that gives
              it its name, but also by the bouquet-like clusters it forms when
              it blooms.
            </p>
            <h3 className="fs-6">POINCIANA</h3>

            <p className="fs-6">
              This truly spectacular bloom is a sign of summer in The Bahamas.
              These deep orange flowers bloom annually during the summer months,
              when they fill their trees with stunning color before falling to
              the ground creating a lush carpet of petals.
            </p>
            <p className="fs-6">
              Up close you can see the way the fern-like leaves of the
              poinciana, also called royal poinciana, spread out to catch the
              Bahamian sunshine. Want to see these Bahamas blooms in person?
              Check out our travel deals and start planning your summer getaway.
            </p>
            <p className="fs-6">
              Possibly one of the most popular tropical flowers, hibiscus can
              come in many colors, sizes and petal shapes. Not only are you
              likely to see them throughout Nassau Paradise Island, you may even
              see them on your plate at one of our restaurants in The
              Bahamas—the hibiscus flower is completely edible.
            </p>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
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
            <div className="card mb-3">
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
            <div className="card mb-3">
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
      <Footer />
    </>
  );
}

export default Blogdetails;
