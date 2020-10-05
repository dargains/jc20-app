import React, {useState} from 'react'
import cx from "classnames"
import styled from 'styled-components'
import {SlideDown} from 'react-slidedown'

const Accordion = ({header, content}) => {
  const [open, setOpen] = useState(false)
  return (
    <article>
      <header className="flex items-center justify-between py-1 pr-2 mt-3 border-b border-green08" onClick={() => setOpen(!open)}>
        <p>{header}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" className={cx("transform transition-transform duration-200", {"rotate-180": open})}>
          <path d="M5,0l5,6H0Z" transform="translate(10 6) rotate(180)" fill="#022b25"/>
        </svg>
      </header>
      <SlideDown className={'my-dropdown-slidedown'}>
        {
          open
          ? <div className="bg-white rounded-lg rounded-t-none" style={{boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'}}>
            <Table>
              <tbody>
              {content.map((item, index) =>
                <tr key={index} className="items-center text-gray-600">
                  <td className="text-center p-4">{item.local}</td>
                  <td className="text-sm p-4">{item.material}</td>
                </tr>
              )}
              </tbody>
            </Table>
          </div>
          : null
        }
      </SlideDown>
    </article>
  )
}

const Table = styled.table`
  border-collapse: collapse;
  td, th {
    border: 1px solid #f7f7f7;
  }
  tr:first-child th {
    border-top: 0;
  }
  tr:last-child td {
    border-bottom: 0;
  }
  tr td:first-child,
  tr th:first-child {
    border-left: 0;
  }
  tr td:last-child,
  tr th:last-child {
    border-right: 0;
  }
`

export default Accordion
