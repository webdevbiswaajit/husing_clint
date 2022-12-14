import HousingIslandCard from "components/HousingIslandCard";

export default function HousingIsland() {
  return (
    <div className="bg-white py-5">
      <div className="container">
        <div className="text-center">
          <h3>Housing on the Islands</h3>
          <p>Check out some of our latest properties on these Islands</p>
        </div>
        <div className="row mb-3">
          <div className="col-sm mb-2 d-flex justify-content-center ">
            <HousingIslandCard
              url="/islands/1"
              title="Grand Bahama"
              img="/img/islands/Grand Bahama Island.jpg"
            />
          </div>
          <div className="col-sm mb-2 d-flex justify-content-center ">
            <HousingIslandCard
              url="/islands/0"
              title="Abaco"
              img="/img/islands/Abaco Island.jpg"
            />
          </div>
          <div className="col-sm mb-2 d-flex justify-content-center ">
            <HousingIslandCard
              url="/islands/2"
              title="Eleuthera"
              img="/img/islands/Eleuthera Island.jpg"
            />
          </div>
          <div className="col-sm mb-2 d-flex justify-content-center">
            <HousingIslandCard
              url="/islands/3"
              title="New Providence"
              img="/img/islands/New province.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
