import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../Layouts/Manage'
import { getFormData } from '../../../helpers/form'
import { linkCreate } from '../../../actions/linkActions'
import { Redirect } from 'react-router-dom'

const Create = ({ link, linkCreate }) => {
  const submitHandler = e => {
    e.preventDefault()

    const data = getFormData(e)

    linkCreate(data)
  }

  if (link)
    return <Redirect to="/manage/links"/>

  return (
    <Layout>
      <h1>Create Link</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control" name="label" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" className="form-control" name="url" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign"></span>
              Is Social
            </label>
          </div>
          <div>
            <button className="btn btn-success btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return { link: state.link.link }
}

export default connect(mapStateToProps, { linkCreate })(Create)
