import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
import Form from '../components/Form';
import Navbar from '../components/Navbar'
import { fetchOneSocialMedia, updateSocialMedia } from '../store/actions/socialMediaAction';

export default function Edit() {
  const { id } = useParams();
  const { detailSocialMedia, isLoading } = useSelector(state => state.socialMedia)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchOneSocialMedia(id));
  }, [])

  const handleEdit = (payload) => {
    dispatch(updateSocialMedia(payload, id))
    history.push('/')
  }

  return (
    <>
    <Navbar />
    <div className="container">
    <div className="card mb-5">
      <div className="card-header">
      <Link to="/">
        <button  className="btn btn-secondary mb-3">Back to home</button>
      </Link>
        <h1 className="text-center">Edit sosial media</h1>
      </div>
      <div className="card-body">
      
      {
        (!isLoading) &&
        <Form detailSocialMedia={detailSocialMedia} handleAction={handleEdit} />
      }
      </div>
    </div>
    </div>
    </>
  )
}
