import style from './style.module.scss'
import { Helmet } from 'react-helmet'

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>
    <div className={style.container}>404 - not found</div>
  </>
)

export default NotFoundPage
