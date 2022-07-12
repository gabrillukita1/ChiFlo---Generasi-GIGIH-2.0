import Footer from "../components/Footer"
import Header from "../components/Header"
import InsuranceOverview from "../components/InsuranceOverview"
import InsuranceVarian from "../components/InsuranceVarian"

const Insurance = () => {
    return(
        <>
            <div className="">
                <Header />
                <InsuranceOverview />
                <InsuranceVarian />
                <Footer />
            </div>
        </>
    )
}

export default Insurance;