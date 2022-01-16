import clsx from 'clsx'
import { Helmet } from 'react-helmet'
import { Navigate, useLinkClickHandler, useLocation } from 'react-router-dom'
import Stepper from '../../components/Stepper'
import style from './style.module.scss'

const ProductRow = ({ id, name, picture, errorDetails }) => (
  <div className={clsx(style.row, errorDetails ? style.error : style.success)}>
    <div className={style.status}>{errorDetails ? 'KO' : 'OK'}</div>

    <div className={style.content}>
      <span>
        <b>id:</b> {id}
      </span>
      <span>
        <b>name:</b> {name}
      </span>
      {errorDetails ? (
        <span>
          <b>details:</b> {errorDetails}
        </span>
      ) : (
        <span>
          <b>dimensions:</b> {picture.height} x {picture.width}
        </span>
      )}
    </div>

    {!errorDetails && <img src={picture.url} alt={name} height={50} />}
  </div>
)

const ProductsSummaryPage = () => {
  const {
    state: { importResult },
  } = useLocation()
  const onGoBack = useLinkClickHandler('..')

  if (!importResult) {
    return <Navigate to=".." />
  }

  return (
    <>
      <Helmet>
        <title>Products summary</title>
      </Helmet>

      <div className={style.header}>
        <button onClick={onGoBack} className={style.goBackButton}>
          &#x2190;
        </button>
        <Stepper steps={['products', 'results']} index={1} className={style.stepper} />
      </div>
      <section className={style.listContainer}>
        {[...importResult.data, ...importResult.errors].map(product => (
          <ProductRow key={product.id} {...product} />
        ))}
      </section>
    </>
  )
}

export default ProductsSummaryPage
