import ForHer from "../../Components/ForHer/ForHer";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="dark:bg-">
                <ForHer></ForHer>
            </div>
        </div>
    );
};

export default Home;