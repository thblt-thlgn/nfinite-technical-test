import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import style from './style.module.scss'
import Stepper from '../Stepper'
import FileImportButton from '../FileImportButton'
import { useApi } from '../../hooks'
import ErrorContainer from '../ErrorContainer'
import { Helmet } from 'react-helmet'

const ProductsImportPage = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const { isLoading, error, triggerApi } = useApi({
    method: 'POST',
    endpoint: 'upload',
    headers: {
      'content-type': 'multipart/form-data',
    },
    onCompleted(importResult) {
      navigate('../summary', { state: { importResult } })
    },
  })

  const uploadDocument = async () => {
    if (!file) {
      throw new Error('Please select a file first')
    }
    const formData = new FormData()
    formData.append('file', file)
    triggerApi({
      body: formData,
    })
  }

  return (
    <>
      <Helmet>
        <title>Products import</title>
      </Helmet>

      <div className={style.header}>
        <ErrorContainer error={error} className={style.errorContainer} />

        <button onClick={() => uploadDocument()} disabled={!file || isLoading} className={style.button}>
          validate
        </button>

        <Stepper steps={['products', 'results']} index={0} className={style.stepper} />
      </div>
      <FileImportButton
        label="upload CSV"
        onAddDocument={setFile}
        authorizedContentTypes={['text/csv']}
        disabled={isLoading}
        className={style.importButton}
      />
    </>
  )
}

export default ProductsImportPage
