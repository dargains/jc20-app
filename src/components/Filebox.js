import React, { useState } from 'react'
import cx from 'classnames'

const Filebox = ({name, placeholder, register, error}) => {
  const [file, setFile] = useState({})
  const handleUpload = ({target}) => {
    setFile(target.files[0])
  }
  return (
    <label className="bg-white rounded-lg shadow-lg flex items-center text-xs overflow-hidden">
      <input
        type="file"
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register}
        className="bg-transparent border-0 hidden"
        onChange={handleUpload}
      />
      <p className={cx("p-4 flex-1",{"text-red": error})}>{file.name || 'nenhum ficheiro selecionado'}</p>
      <span className="bg-green02 text-white py-4 px-2 ">escolha ficheiro</span>
    </label>
  )
}

export default Filebox
