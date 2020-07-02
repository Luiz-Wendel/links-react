import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../../Layouts/Manage'
import { linkList, setLinkToRemove, linkDelete } from '../../../actions/linkActions'

const Links = ({ links, linkList, setLinkToRemove, linkToRemove, linkDelete }) => {

  useEffect(() => {
    linkList()
  }, [linkList])

  const abortDelete = e => setLinkToRemove(null)

  const confirmDelete = e => linkToRemove ? linkDelete(linkToRemove) : null

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Links</h1>
        </div>

        <div className="col text-right align-self-bottom pt-2">
          <Link to="/manage/links/create" className="btn btn-primary">
            Add
          </Link>
        </div>
      </div>

      { links && links.length ? links.map(link => {
        const deleteClick = e => setLinkToRemove(link)

        const border = (linkToRemove && linkToRemove.id === link.id) ? 'border border-danger rounded' : 'border border-transparent'

        return (
          <div key={ link.id } className={`px-2 py-3 d-flex flex-row justify-content-between ${border}`}>
            <div className="pr-3">
              <img src="https://via.placeholder.com/100" alt="Link icon" />
            </div>
            <div className="align-self-center">
              <span className="text-primary clearfix">{link.label}</span>
              <span className="text-primary clearfix">{link.url}</span>
            </div>
            <div className="ml-auto p-2 clearfix">
              <Link to={`/manage/links/edit/${link.id}`}>
                Edit
              </Link>
              <button className="btn btn-clear" onClick={deleteClick}>
                Delete
              </button>
            </div>
          </div>
        )
      }) : null }

      { linkToRemove ? (
        <div className="alert alert-danger rounded float-center shadow-strong">
          <h4 className="alert-heading">Delete Confirmation</h4>
          <p className="mb-0">Are you sure you want to delete this link?</p>
          <p>This action cannot be undone!</p>
          <hr/>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-light" onClick={abortDelete}>Abort</button>
            <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    links: state.link.links,
    linkToRemove: state.link.linkToRemove
  }
}

export default connect(mapStateToProps, { linkList, setLinkToRemove, linkDelete })(Links)
