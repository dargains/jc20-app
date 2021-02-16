import React, { useContext, useEffect, useState } from 'react'
import cx from 'classnames'
import Icon from './Icon'
import Axios from 'axios'
import { itemsUrl } from '../api'
import { AppContext } from '../store'

const SocialMedia = ({color='green', size='md'}) => {
  const [state] = useContext(AppContext)
  const [content, setContent] = useState({})
  const iconSize = size === 'md' ? 40 : 32

  useEffect(() => {
    Axios(`${itemsUrl}/social_media`).then(response => {
      setContent(response.data.data[0]);
    })
  }, [])

  return (
    <div className={cx(
      "w-full text-center",
      {
        "text-white": color === 'white',
        'text-green07': color === 'green'
      }
    )}>
      <p className={cx('mb-4',
        {
          "text-xs": size === 'sm'
        }
      )}>
        {state.language === 'pt' ? "siga-nos em:" : "follow us:"}
      </p>
      <div className={cx(
        "flex items-center justify-between mx-auto w-40 mb-12",
        {
          "w-40": size === 'sm',
          "w-48": size === 'md'
        }
        )}>
        <a href={content.facebook} target="_blank" rel="noopener noreferrer">
          <Icon.Facebook height={iconSize}/>
        </a>
        <a href={content.instagram} target="_blank" rel="noopener noreferrer">
          <Icon.Instagram height={iconSize}/>
        </a>
        <a href={content.linkedin} target="_blank" rel="noopener noreferrer">
          <Icon.Linkedin height={iconSize}/>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
