import Footer from "../components/Footer";
import Header from "../components/Header";
import FormPesanan from "../components/FormPesanan";

const Pesanan = () => {
    // const [namaLengkap, setnamaLengkap] = useState("");
    // const [Email, setEmail] = useState("");
    // const [Alamat, setAlamat] = useState("");
    // const [noHandphone, setnoHandphone] = useState("");
    // const [Service, setService] = useState("");

    return(
        <>
           <div>
                <Header />
                <FormPesanan />
                <Footer />
           </div>
        </>
    )
}

export default Pesanan;