import ForHer from "../../Components/ForHer/ForHer";
import ForHim from "../../Components/ForHim/ForHim";
import Banner from "../../Components/Header/Banner/Banner";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ForHer></ForHer>
            <NewArrivals></NewArrivals>
            <ForHim></ForHim>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;