import Header from '../Header'
import style from './style.module.scss'

const PageTemplate = ({ children }) => (
  <div className={style.container}>
    <Header />

    <div className={style.pageContent}>{children}</div>
  </div>
)

export default PageTemplate
