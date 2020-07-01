import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../Layouts/Manage'

const Edit = () => {
  return (
    <Layout>
      <h1>Edit Link</h1>
      <div className="d-flex flex-column h-100">
        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" className="form-control" />
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

export default Edit
