import Banner from "../../Components/Banner/Banner";
import FoodItem from "../Food Items/FoodsItem";


const Home = () => {
    return (
        <>
        <div className="container mx-auto">

            <Banner></Banner>
            <FoodItem></FoodItem>
        </div>
        </>
    );
};

export default Home;