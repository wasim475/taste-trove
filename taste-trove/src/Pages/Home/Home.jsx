import Banner from "../../Components/Banner/Banner";
import RecentAddedFood from "../../Components/RecentlyAddedFood/RecentAddedFood";
import UserFeedBack from "../../Components/UserFeedBack/UserFeedBack";
import FoodItem from "../Food Items/FoodsItem";


const Home = () => {
    return (
        <>
        <div className="container mx-auto">

            <Banner></Banner>
            <FoodItem></FoodItem>
            <RecentAddedFood></RecentAddedFood>
            <UserFeedBack></UserFeedBack>
        </div>
        </>
    );
};

export default Home;