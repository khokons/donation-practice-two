import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";


const Home = () => {
    const cardInfo = useLoaderData();
    
    return (
        <div>
           <Banner></Banner>
           <Cards cardInfo={cardInfo}></Cards>
        </div>
    );
};

export default Home;