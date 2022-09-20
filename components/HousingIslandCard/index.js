import Image from "next/image";
import Link from "next/link";
export default function HousingIslandCard({ title, url, img }) {
  return (
    <div
      className="card bg-dark text-white card-shadow border-0"
     
    >
      <Image src={img} 
      height='300px' width='300px'
      alt="..." />
      <div className="card-img-overlay bg-overlay">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Link href={url}>
            <a className="btn btn-green">{title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
