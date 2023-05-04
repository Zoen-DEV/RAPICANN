import React from "react";
import Navbar from "../components/navbar";
import ProductCard from "../components/ProductCard";
import harddiesel from "../../assets/harddiesel.png";
import gorillaglue4 from "../../assets/gorillaglue4.png";
import widow from "../../assets/widow.png";

const Store = () => {
  const sepas = [
    {
      id: 1,
      name: "HARD DIESEL",
      thc: "8",
      cbd: "2",
      efecto: "Estimulante / Cerebral",
      sabor: "Diesel / Gasolina",
      image: harddiesel,
    },
    {
      id: 2,
      name: "WIDOW",
      thc: "7",
      cbd: "6",
      efecto: "Alegre / Corporal",
      sabor: "Dulce / Floral",
      image: widow,
    },
    {
      id: 3,
      name: "HARD DIESEL",
      thc: "9",
      cbd: "5",
      efecto: "Relajante / Corporal",
      sabor: "Incienso / Terroso",
      image: gorillaglue4,
    },
  ];

  return (
    <main className={`flex min-h-screen flex-col items-center `}>
      <Navbar />
      <ul className="flex flex-col gap-5 py-10 px-2">
        {sepas?.map((sepa) => (
          <ProductCard
            name={sepa.name}
            thc={sepa.thc}
            cbd={sepa.cbd}
            efecto={sepa.efecto}
            sabor={sepa.sabor}
            image={sepa.image}
            id={sepa.id}
          />
        ))}
      </ul>
    </main>
  );
};

export default Store;
