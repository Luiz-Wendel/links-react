import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../../Layouts/Manage'
import FormGroup from '../../../components/FormGroup'
import { linkGet, linkUpdate } from '../../../actions/linkActions'
import FormCheck from '../../../components/FormCheck'
import { getFormData } from '../../../helpers/form'

const Edit = ({ link, linkGet, linkUpdate }) => {
  const { id } = useParams()

  useEffect(() => {
    linkGet(id)
  }, [id, linkGet])

  const submitHandler = e => {
    e.preventDefault()

    const data = getFormData(e)

    linkUpdate(id, data)
  }

  return (
    <Layout>
      <h1>Edit Link</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <FormGroup label="Label" name="label" data={link} type="text" />

          <FormGroup label="Url" name="url" data={link} type="text" />

          <FormCheck label="Is Social" name="isSocial" data={link} />
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

export default connect(mapStateToProps, { linkGet, linkUpdate })(Edit)
