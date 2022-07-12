import Header from "../components/Header";
import Footer from "../components/Footer";
import CleaningOverview from "../components/CleaningOverview";
import CleaningService from "../components/CleaningService";

const Cleaning = () => {
    return(
        <>
            <Header />

            <div className="cleaning_body">
                <CleaningOverview />
                <CleaningService />
            </div>

            <Footer />
        </>
    )
}

export default Cleaning;