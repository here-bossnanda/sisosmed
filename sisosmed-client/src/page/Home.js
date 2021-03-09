import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataSocialMedia, deleteSocialMedia } from '../store/actions/socialMediaAction';
import TableSocialMedia from '../components/TableSocialMedia'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar';
import useDebounce from '../hooks/useDebounce';

export default function Home() {
  const { socialMedia, isLoading } = useSelector(state => state.socialMedia);
  const [getAllSocialMedia, setAllSocialMedia] = useState([]);
  const [getSearch, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(getSearch, 400);

  useEffect(() => {
    let filteredMovie = socialMedia.filter(socialMedia => new RegExp(getSearch, "i").exec(socialMedia.pendiri));
    setAllSocialMedia(filteredMovie)
    setIsSearching(false);
  }, [debouncedSearchTerm]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDataSocialMedia());
    setAllSocialMedia(socialMedia)
  }, [])

  useEffect(() => {
    setAllSocialMedia(socialMedia)
  }, [socialMedia])

  const handleEdit = (e, id) => {
    e.preventDefault();
    history.push(`/aplikasi/${id}/edit`);
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSocialMedia(id))
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      }
    })
  }

  const handleSearch = (e) => {
    setIsSearching(true);
    setSearch(e.target.value);
  }

  
  return (
    <>
    <Navbar />
    <div className="container">
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">Informasi Sosial Media</h1>
      </div>
      <div className="card-body">
        <Link to="/aplikasi/create">
          <button  className="btn btn-primary mb-3">Add Social Media</button>
        </Link>
        <input type="text" value={getSearch} onChange={(e) => handleSearch(e)}  name="search" id="search" className="form-control" placeholder="Search by founder..."/>
        <TableSocialMedia isLoading={isLoading} isSearching={isSearching} getAllSocialMedia={getAllSocialMedia} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
    </div>
    </>
  )
}
