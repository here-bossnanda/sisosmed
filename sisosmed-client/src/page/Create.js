import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import { storeSocialMedia } from '../store/actions/socialMediaAction'

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCreate = (payload) => {
    dispatch(storeSocialMedia(payload))
    history.push('/')
  }
  
  return (
    <>
    <Navbar />
    <div className="container mb-5">
    <div className="card">
      <div className="card-header">
      <Link to="/">
        <button  className="btn btn-secondary mb-3">Back to home</button>
      </Link>
        <h1 className="text-center">Add sosial media</h1>
      </div>
      <div className="card-body">
      <Form handleAction={handleCreate} />
      </div>
    </div>
    </div>
    </>
  )
}
