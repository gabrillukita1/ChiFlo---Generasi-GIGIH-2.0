import { Link } from "react-router-dom"
import TextButton from "./TextButton"
const CleaningService = () => {
    return(
        <div className="cleanService_container">
            <div className="cleanService_top">
                <h2>Layanan Cleaning Service <span className="orange_text">ChiFlo</span></h2>

                <div className="cleaningServices">
                    <div className="cleaningService">
                        <h4>Pembersihan Rumah</h4>
                        <p>Mulai dari 500rb</p>
                        <img src="/HouseClean.png" alt="" />
                        <br/>
                        <Link to={'/pesan'}><TextButton className="text-button" label="Pesan" /></Link>
                    </div>

                    <div className="cleaningService">
                        <h4>Pembersihan Properti</h4>
                        <p>Mulai dari 500rb</p>
                        <img src="/PropertiClean.png" alt="" />
                        <br/>
                        <Link to={'/pesan'}><TextButton className="text-button" label="Pesan" /></Link>
                    </div>

                    <div className="cleaningService">
                        <h4>Pembersihan Mobil</h4>
                        <p>Mulai dari 500rb</p>
                        <img src="/CarClan.png" alt="" />
                        <br/>
                        <Link to={'/pesan'}><TextButton className="text-button" label="Pesan" /></Link>
                    </div>
                </div>
            </div>

            <div className="cleanService_bottom">
                <h2><span className="orange_text">ChiFlo</span> Spesialis Pembersihan Pasca Banjir</h2>

                <p>Salah satu PR (Pekerjaan Rumah) yang menguras tenaga pasca banjir adalah membersihkan rumah karena air banjir biasanya menyisakan tanah atau lumpur yang sulit dibersihkan

                Gunakan ChiFlo untuk jasa pemberihan rumah menyeluruh, dengan harga yang murah dan pelayanan terbaik. Pastikan rumah anda sehat dan terbebas dari bakteri</p>

                <div className="cleaningServices">
                    <div className="cleaningService">
                        <h4>Pembersihan Rumah Banjir</h4>
                        <p>Mulai dari 500rb</p>
                        <img src="/PropertiClean.png" alt="" />
                        <br/>
                        <Link to={'/pesan'}><TextButton className="text-button" label="Pesan" /></Link>
                    </div>

                    <div className="cleaningService">
                        <h4>Pembersihan Mobil Banjir</h4>
                        <p>Mulai dari 500rb</p>
                        <img src="/CarClan.png" alt="" />
                        <br/>
                        <Link to={'/pesan'}><TextButton className="text-button" label="Pesan" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CleaningService;