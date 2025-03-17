import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Productcard from "@/components/ProductCard";

export default function Home() {
  return (
    <main >
      <Banner/>
      <div style={{margin:"20px",display:"flex",
        flexDirection:"row",alignContent:"space-around",
        justifyContent:"space-around",flexWrap:"wrap"
      }}>
        <Productcard carName='Honda Civic' imgSrc="/img/civic.jpg"/>
        <Productcard carName="Honda Accord" imgSrc="/img/accord.jpg"/>
        <Productcard carName="Toyota Fortuner" imgSrc="/img/fortuner.jpg"/>
        <Productcard carName="Tesla Model3" imgSrc="/img/tesla.jpg"/>
        
      </div>
    </main>
  );
}
