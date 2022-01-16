import clsx from 'clsx'
import style from './style.module.scss'

const Stepper = ({ steps = [], index: currentIndex = 0, className }) => (
  <div className={clsx(style.container, className)}>
    {steps.map((step, index) => (
      <span key={step} className={clsx(style.step, currentIndex === index && style.active)}>
        <span className={style.index}>{index + 1}</span>
        <span>{step}</span>
      </span>
    ))}
  </div>
)

export default Stepper
