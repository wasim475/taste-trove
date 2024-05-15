import Banner from "../../Components/Banner/Banner";
import UserFeedBack from "../../Components/UserFeedBack/UserFeedBack";
import FoodItem from "../Food Items/FoodsItem";


const Home = () => {
    return (
        <>
        <div className="container mx-auto">

            <Banner></Banner>
            <FoodItem></FoodItem>
            <UserFeedBack></UserFeedBack>
        </div>
        </>
    );
};

export default Home;