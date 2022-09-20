import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function Partners() {


  

  return (
    <div className="py-5" style={{ background: "#fff" }}>
      <div className="div text-center text-dark">
        <h3>Agencies</h3>
        <p>We are honoured to have these amazing agencies</p>
      </div>
      {/* <Marquee gradient={false}> */}
      <Marquee gradient='flase'>
   <div className="m-4"><Image  height={110} width={248} className="pe-none " src="/img/partners/Logo 02.png" alt="..." /></div>
   <div className="m-4"><Image  height={110} width={106} className="pe-none" src="/img/partners/Logo 03.png" alt="..." /></div>
   <div className="m-4"><Image  height={110} width={110} className="pe-none" src="/img/partners/Logo 01.png" alt="..." /></div>
   <div className="m-4"> <Image  height={110} width={248} className="pe-none" src="/img/partners/Logo 04.png" alt="..." /></div>
   <div className="m-4"><Image  height={110} width={132} className="pe-none" src="/img/partners/Logo 05.png" alt="..." /></div>
   <div className="m-4"> <Image  height={110} width={220} className="pe-none" src="/img/partners/Logo 06.png" alt="..." /></div>
   <div className="m-4"> <Image  height={80} width={156} className="pe-none" src="/img/partners/Logo 07.png" alt="..." /></div>
   <div className="m-4"><Image  height={110} width={248} className="pe-none " src="/img/partners/Logo 02.png" alt="..." /></div>
   <div className="m-4"><Image  height={110} width={106} className="pe-none" src="/img/partners/Logo 03.png" alt="..." /></div>
   <div className="m-4"><Image  height={110} width={110} className="pe-none" src="/img/partners/Logo 01.png" alt="..." /></div>
   <div className="m-4"> <Image  height={110} width={248} className="pe-none" src="/img/partners/Logo 04.png" alt="..." /></div>
   <div className="m-4"><Image  height={110} width={132} className="pe-none" src="/img/partners/Logo 05.png" alt="..." /></div>
   <div className="m-4"> <Image  height={110} width={220} className="pe-none" src="/img/partners/Logo 06.png" alt="..." /></div>
   <div className="m-4"> <Image  height={80} width={156} className="pe-none" src="/img/partners/Logo 07.png" alt="..." /></div>

      </Marquee>
    </div>
  );
}