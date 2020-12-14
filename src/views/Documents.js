import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import Mask from '../components/Mask'
import Icon from '../components/Icon'
import Axios from 'axios'
import { itemsUrl } from '../api'

const Documents = () => {
  const [docItems, setDocItems] = useState([])
  const [apItems, setApItems] = useState([])
  const [selectedUnit, setSelectedUnit] = useState({})
  
  useEffect(() => {
    Axios(`${itemsUrl}/documents?fields=*.*.*`).then(response => {
      setDocItems(response.data.data[0].documents)
    })
    Axios(`${itemsUrl}/units?fields=title,documents.*.*.*`).then(response => {
      setApItems(response.data.data.sort((a, b) => a.title.localeCompare(b.title)))
    })
  }, [])
  return (
    <section>
      <Mask />
      <div className="wrapper">
        {
          selectedUnit.title
          ? <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
              Apartamento <span className="text-green">{selectedUnit.title}</span>
            </h1>
          : <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
              Documentos <span className="text-green">comerciais</span>
            </h1>
        }
        {
          selectedUnit.title
          ? <>
            {
              selectedUnit.documents.map(item =>
                <article key={item.directus_files_id.title} className="flex items-center justify-between px-4 py-6 rounded-lg shadow-lg mb-6 text-green08">
                  <p className="text-xl ">{item.directus_files_id.title}</p>
                  <a href={item.directus_files_id.data.full_url} download>
                    <Icon.Download />
                  </a>
                </article>
              )
            }
            </>
          : <>
            {
              docItems.map(item =>
                <article key={item.directus_files_id.title} className="flex items-center justify-between px-4 py-6 rounded-lg shadow-lg mb-6 text-green08">
                  <p className="text-xl ">{item.directus_files_id.title}</p>
                  <a href={item.directus_files_id.data.full_url} download>
                    <Icon.Download />
                  </a>
                </article>
              )
            }
            {
              apItems.map(item =>
                <article
                  key={item.title}
                  className={cx("flex items-center justify-between px-4 py-6 rounded-lg shadow-lg mb-6 text-green08",{"opacity-50 pointer-events-none": item.documents.length === 0})}
                  onClick={() => {setSelectedUnit(item)}}
                >
                  <p className="text-xl ">Apartamento {item.title}</p>
                </article>
              )
            }
          </>
        }
        
      </div>
    </section>
  )
}

export default Documents
