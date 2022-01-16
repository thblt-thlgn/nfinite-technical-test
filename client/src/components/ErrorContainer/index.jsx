import clsx from 'clsx'
import style from './style.module.scss'

const ErrorContainer = ({ error, className }) => {
  if (!error) {
    return null
  }

  return <div className={clsx(style.container, className)}>⚠ {error.message}</div>
}

export default ErrorContainer
