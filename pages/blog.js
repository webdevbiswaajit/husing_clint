import Bloghead from "components/Blog/bloghead";
import Blogslider from "components/Blog/blogslider";
import Popularblog from "components/Blog/popularblog";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function Blog() {
  return (
    <>
      <Navbar />
      <Bloghead />
      <Blogslider />
      <Popularblog />
      <Footer />
    </>
  );
}

export default Blog;
