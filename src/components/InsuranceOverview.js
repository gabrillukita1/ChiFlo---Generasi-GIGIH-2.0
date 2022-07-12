const InsuranceOverview = () => {
    return (
        <>
             <div className="container insurance_container">
                <div className="leftSide insurance_desc">
                    <h1>Asuransi Properti dan Kendaraan Online Terbaik di Indonesia </h1>

                    <p>
                    Asuransi yang memberikan <span className="orange_text">perlindungan untuk aset bangunan/ material, stok, mesin, kendaraan dan lainnya seperti rumah/ tempat tinggal, ruko/ tempat usaha, Gudang</span> dan bangunan lainnya beserta isinya dari <span className="orange_text">resiko kebakaran, Ledakan, petir, banjir, pencurian dan lainnya.</span>
                    </p>
                </div>
            
                <div className="rightSide col-5 insurance_img">
                    <img src="/insuranceOverview.png" alt="icon" />
                </div>

                <div className="line">
                        <img src="/line.png" alt="/" />
                </div>
        </div>
        </>
    )
}

export default InsuranceOverview;