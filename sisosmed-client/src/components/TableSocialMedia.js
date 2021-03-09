import React from 'react'

export default function TableSocialMedia(props) {
  const { getAllSocialMedia, handleDelete, handleEdit,isSearching, isLoading } = props;
  return (
    <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Aplikasi</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah Pengguna</th>
              <th scope="col">Pendiri</th>
              <th scope="col">Tanggal Didirikan</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
            (isLoading) ? 
            <tr>
              <td colSpan="7" className="text-center">wait a minute...</td>
            </tr>:
            (isSearching) ? 
            <tr>
              <td colSpan="7" className="text-center">Searching...</td>
            </tr> :
            (getAllSocialMedia.length === 0) ? 
            <tr>
            <td colSpan="7" className="text-center">No data existing...</td>
            </tr>
            :
            getAllSocialMedia.map((socialMedia, idx) => {
              return (<tr key={idx}>
                <td>{++idx}</td>
                <td>{socialMedia.nama_aplikasi}</td>
                <td>{socialMedia.keterangan}</td>
                <td>{socialMedia.jumlah_pengguna}</td>
                <td>{socialMedia.pendiri}</td>
                <td>{socialMedia.tanggal_didirikan}</td>
                <td>
                    <button onClick={(e) => handleEdit(e, socialMedia.id)} type="button" className="btn btn-warning">Edit</button>
                    <button onClick={(e) => handleDelete(e, socialMedia.id)} type="button" className="btn btn-danger mx-2">Delete</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
  )
}
