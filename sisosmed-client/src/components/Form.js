import React, { useEffect, useState } from 'react'

export default function Form(props) {
  
  const { detailSocialMedia, handleAction } = props;

  const [validate, setValidate] = useState("");
  const [inputSocialMedia, setinputSocialMedia] = useState({
    nama_aplikasi: '',
    keterangan: '',
    jumlah_pengguna: '',
    pendiri: '',
    tanggal_didirikan: ''
  })

  useEffect(() => {
    if (detailSocialMedia) {
      setinputSocialMedia({
        nama_aplikasi: detailSocialMedia.nama_aplikasi,
        keterangan: detailSocialMedia.keterangan,
        jumlah_pengguna: detailSocialMedia.jumlah_pengguna,
        pendiri: detailSocialMedia.pendiri,
        tanggal_didirikan: detailSocialMedia.tanggal_didirikan
      })
    }
  }, [])

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    setinputSocialMedia({
      ...inputSocialMedia,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      handleAction(inputSocialMedia)
  }
  
  return (
    <div>
      <p style={{ color: "red" }}> {validate} </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nama_aplikasi" className="form-label">Nama Aplikasi</label>
          <input type="text" className="form-control" required value={inputSocialMedia.nama_aplikasi} onChange={(e) => handleChange(e)} name="nama_aplikasi" id="nama_aplikasi" placeholder="nama aplikasi" />
        </div>
        <div className="mb-3">
          <label htmlFor="keterangan" className="form-label">Keterangan</label>
          <input type="text" className="form-control" required value={inputSocialMedia.keterangan} onChange={(e) => handleChange(e)} name="keterangan" id="keterangan" placeholder="keterangan" />
        </div>
        <div className="mb-3">
          <label htmlFor="jumlah_pengguna" className="form-label">Jumlah Pengguna</label>
          <input type="number" className="form-control" required value={inputSocialMedia.jumlah_pengguna} onChange={(e) => handleChange(e)} name="jumlah_pengguna" id="jumlah_pengguna" placeholder="jumlah pengguna" />
        </div>
        <div className="mb-3">
          <label htmlFor="pendiri" className="form-label">Pendiri</label>
          <input type="text" className="form-control" required value={inputSocialMedia.pendiri}  onChange={(e) => handleChange(e)} name="pendiri" id="pendiri" placeholder="pendiri" />
        </div>
        <div className="mb-3">
          <label htmlFor="tanggal_didirikan" className="form-label">Tanggal Didirikan</label>
          <input type="text" className="form-control" required value={inputSocialMedia.tanggal_didirikan} onChange={(e) => handleChange(e)} name="tanggal_didirikan" id="tanggal_didirikan" placeholder="tanggal_didirikan" />
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  )
}
