import React, { useCallback, useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import SocialMedia from '../components/SocialMedia';
import Axios from 'axios'
import { itemsUrl } from '../api'
import db from '../db'
import { AppContext } from '../store'
import styled from 'styled-components';

const About = () => {
  const [state] = useContext(AppContext)
  const [content, setContent] = useState({})
  const [logo, setLogo] = useState('')
  const [copy, setCopy] = useState({copy:{}, language: state.language})

  const changeCopy = useCallback(content => {
    const copy = content.find(translation => translation.language === state.language)
    setCopy(copy)
  },[state.language])

  useEffect(() => {
    if (!Object.keys(content).length) {
      if (window.navigator.onLine) {
        Axios(`${itemsUrl}/page_about?fields=*.*.*.*`).then(response => {
          const allContent = response.data.data[0].translations;
          setContent(allContent)
          db.content.put({ page: 'About', content: allContent })
          changeCopy(allContent)
          setLogo(response.data.data[0].logo.data.full_url)
        })
      } else {
        db.content.get('About').then(contentDB => {
          setContent(contentDB.content)
          changeCopy(contentDB.content)
        })
      }
    } else {
      if (state.language !== copy.lang) {
        changeCopy(content)
      }
    }
    return () => {
      
    }
  }, [changeCopy, content, copy.lang, state.language])


  return (
    <section className="pb-0">
      <figure className="w-2/5 mx-auto my-8">
        <img src={logo} alt="Rio Capital" />
      </figure>
      <div
        className=" rounded-t-xl pt-16 pb-12"
        style={{ backgroundColor: "#2c3e4a" }}
      >
        <div className="wrapper text-white">
          <Body dangerouslySetInnerHTML={{
            __html: copy.text
          }} />
          <Button
            text={copy.button_label}
            type="secondary"
            className="mt-8 mb-12"
            handleClick={
              () => {
                window.open(copy.button_link);
              }
            }
          />
          <SocialMedia color="white" size="md" />
        </div>
      </div>
    </section>
  );
}

const Body = styled.div`
  p {
    margin-bottom: 1rem;
  }
`

export default About