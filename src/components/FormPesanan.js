const FormPesanan = () => {
    return (
        <>
            <div className="orderPage">

                <div className="topContent">
                   <h2>Kami siap <span className="orange_text">membantu</span> anda</h2> 

                   <p>Silahkan isi formulir di bawah ini untuk melanjutkan pemesanan</p>
                </div>

                <div className="pesanan_container">
                    <div className="pesananLeft">
                        <form>
                            <div className="order_container">
                                <div className="form">
                                    <label htmlFor="namaLengkap">Nama Lengkap</label>
                                    <input type="text" 
                                        name="namaLengkap"
                                        placeholder="Masukkan nama lengkap anda"
                                    />
                                </div>

                                <div className="form">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" 
                                        name="email"
                                        placeholder="Masukkan email anda"
                                    />
                                </div>

                                <div className="form">
                                    <label htmlFor="alamat">Alamat</label>
                                    <input type="text" 
                                        name="alamat"
                                        placeholder="Masukkan alamat anda"
                                    />
                                </div>

                                <div className="form">
                                    <label htmlFor="noHp">Nomor Handphone</label>
                                    <input type="text" 
                                        name="noHp"
                                        placeholder="Masukkan nomor handphone anda"
                                    />
                                </div>

                                <div className="form">
                                    <label htmlFor="service">Service</label>
                                    <select name="service">
                                        <option value="rumah" key="">Pembersihan Rumah</option>
                                        <option value="mobil" key="">Pembersihan Mobil</option>
                                        <option value="properti" key="">Pembersihan Properti</option>
                                    </select>
                                </div>

                                <input type="submit" value={"Kirim"} className="kirim" />
                            </div>
                        </form>
                    </div>

                    <div className="pesananRight">
                        <img src="/formOrder.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormPesanan;