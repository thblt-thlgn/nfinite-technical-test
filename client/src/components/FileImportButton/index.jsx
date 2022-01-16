import style from './style.module.scss'
import { useRef } from 'react'
import clsx from 'clsx'

export const FileImportButton = ({ authorizedContentTypes = [], onAddDocument, label, disabled, className }) => {
  const inputRef = useRef()

  return (
    <>
      <button onClick={() => inputRef.current?.click()} className={clsx(style.button, className)} disabled={disabled}>
        <span>+</span>
        <span>{label}</span>
      </button>

      <input
        type="file"
        hidden
        ref={inputRef}
        onChange={e => onAddDocument(e.target.files[0])}
        accept={authorizedContentTypes.join()}
      />
    </>
  )
}

export default FileImportButton
