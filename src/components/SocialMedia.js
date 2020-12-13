import React from 'react'
import cx from 'classnames'
import Icon from './Icon'

const SocialMedia = ({color, size}) => {
  const iconSize = size === 'md' ? 40 : 32
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
        siga-nos em:
      </p>
      <div className={cx(
        "flex items-center justify-between mx-auto w-40 mb-12",
        {
          "w-40": size === 'sm',
          "w-48": size === 'md'
        }
        )}>
        <a href="https://www.facebook.com/Rio-Capital-110995827277037" target="_blank" rel="noopener noreferrer">
          <Icon.Facebook height={iconSize}/>
        </a>
        <a href="https://www.instagram.com/riocapital.pt/" target="_blank" rel="noopener noreferrer">
          <Icon.Instagram height={iconSize}/>
        </a>
        <a href="https://www.linkedin.com/company/rio-capital-pt/" target="_blank" rel="noopener noreferrer">
          <Icon.Linkedin height={iconSize}/>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
