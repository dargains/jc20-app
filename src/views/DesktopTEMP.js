import React, {useState} from 'react'
import Video from '../assets/videos/video.mp4'
import AL from '../assets/images/al logo.svg'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SocialMedia from '../components/SocialMedia'
import { contactEmail, sendEmail } from '../helpers';
import cx from 'classnames'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Loading from '../components/Loading'
import Button from '../components/Button'
import Inputbox from '../components/Inputbox';
import { Link } from 'react-router-dom'

const galleryImages = [
  {
    src: require("../assets/images/cam-06-sala.jpg"),
    alt: 'Sala',
    className: 'col-span-2'
  },
  {
    src: require("../assets/images/cam-05-cozinha.jpg"),
    alt: 'Cozinha',
    className: 'col-span-2'
  },
  {
    src: require("../assets/images/cam-09-suite.jpg"),
    alt: 'Suite',
    className: 'col-span-2'
  },
  {
    src: require("../assets/images/cam-03-varanda.jpg"),
    alt: 'Varanda',
    className: 'col-span-2'
  },
  {
    src: require("../assets/images/cam-02-patio.jpg"),
    alt: 'Patio'
  },
  {
    src: require("../assets/images/cam-10-garagem.jpg"),
    alt: 'Garagem'
  },
]

const floorImages = [
  {
    src: require("../assets/images/floorplans/FR A.png"),
    alt: 'Fração A',
  },
  {
    src: require("../assets/images/floorplans/FR B.png"),
    alt: 'Fração B',
  },
  {
    src: require("../assets/images/floorplans/FR C.png"),
    alt: 'Fração C',
  },
  {
    src: require("../assets/images/floorplans/FR D.png"),
    alt: 'Fração D',
  },
  {
    src: require("../assets/images/floorplans/FR E.png"),
    alt: 'Fração E',
  },
  {
    src: require("../assets/images/floorplans/FR F.png"),
    alt: 'Fração F',
  },
  {
    src: require("../assets/images/floorplans/FR G.png"),
    alt: 'Fração G',
  },
  {
    src: require("../assets/images/floorplans/FR H.png"),
    alt: 'Fração H',
  },
]

const DesktopTEMP = () => {
  const [errorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({name, email, subject, text}) => {
    setIsLoading(true)
    const body = {
      to: [
        contactEmail
      ],
      subject: "[Avenida Living] Contato",
      body: "{{name}} ({{email}}) enviou a seguinte mensagem:<br>{{subject}}<br>{{text}}",
      data: {
        name,
        email,
        subject,
        text
      }
    }
    await sendEmail(body)
    setEmailSent(true)
    setIsLoading(false)
  }

  return (
    <div className="desktop hidden md:block">
      <div className="mb-16">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="wrapper w-full center-horizontal py-16 absolute left-0 top-0 ">
          {/* <h1 className=" text-4xl text-white">Avenida Living</h1> */}
          <figure className="w-32 mb-10">
            <img src={AL} alt="Avenida Living"/>
          </figure>
        </div>
      </div>
      <div className="wrapper">
        <div className="flex">
          <figure className="flex-1 mr-8">
            <img src={require("../assets/images/fachada01.jpg")} alt="Fachada"/>
          </figure>
          <p className="flex-1 text-lg self-end">
            Localizado no elegante bairro das Avenidas Novas, Avenida Living está no coração da cidade, beneficiando de toda a centralidade. Ao seu redor, dispõe de uma vasta oferta de espaços de cultura e lazer, bem como de escolas e hospitais e de diversas zonas que lhe oferecem um contacto imperdível com a natureza.
          </p>
        </div>
        </div>
        <h2 className="font-display text-green08 text-4xl mt-16 mb-4">
          Galeria
        </h2>
        <Carousel
          showThumbs={false}
          showArrows
          showStatus={false}
          infiniteLoop
          centerMode
        >
          {galleryImages.map(image => 
            <figure style={ {maxHeight: 600, width: '300', height: '100%', margin: '0 20px' }} key={image.src}>
              <img src={image.src} alt={image.alt} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
            </figure>
          )}
        </Carousel>
        
        <h2 className="font-display text-green08 text-4xl mt-16 mb-4">
          Plantas
        </h2>
        <Carousel
          showThumbs={false}
          showArrows
          showStatus={false}
          infiniteLoop
        >
          {floorImages.map(image => 
            <figure style={ {maxHeight: 650, height: '100%' }} key={image.src}>
              <img src={image.src} alt={image.alt} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
            </figure>
          )}
        </Carousel>

        <div className="wrapper">
        <div className="mt-16">
          <h3 className="font-display text-green08 text-4xl mb-4">Contatos</h3>
          <div className="flex">
            <div className="flex-1">
              <p>Teremos todo o prazer em esclarecer as suas dúvidas e ir ao encontro de todas as suas necessidades.</p>
            </div>
            <div className="flex-1">
              { isLoading && <Loading /> }
              {
                emailSent
                ? <div className="">
                    <h1 className="text-green08 w-2/3 mb-8">
                      Obrigado pelo contacto
                    </h1>
                    <p className="text-green mt-4">
                      Sua mensagem foi enviada com sucesso e receberá a nossa melhor atenção. 
                    </p>
                    <p className="text-green mt-4">
                      Prometemos ser breve na resposta. 
                    </p>
                    <div className="w-full text-center text-green mt-16">
                      <SocialMedia />
                      <Link to="/contacts">
                        <Button text="voltar à contactos" type="secondary" />
                      </Link>
                    </div>
                  </div>
                : <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} >
                      <Inputbox
                        type="text"
                        color="green"
                        placeholder="nome"
                        name="name"
                        error={errors.name}
                        register={register({required: true})}
                        required={true}
                      />
                      {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

                      <Inputbox
                        type="email"
                        color="green"
                        placeholder="e-mail"
                        name="email"
                        error={errors.email}
                        register={register({required: true})}
                        required={true}
                      />
                      {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

                      <Inputbox
                        type="text"
                        color="green"
                        placeholder="assunto"
                        name="subject"
                        error={errors.subject}
                        register={register({required: true})}
                        required={true}
                      />
                      {errors.subject && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

                      <textarea
                        color="green"
                        placeholder="texto"
                        name="text"
                        rows="5"
                        error={errors.text}
                        ref={register({required: true})}
                        className={cx(
                          "border-b bg-transparent w-full py-1 mt-6 text-green08 border-green08",
                          {
                            "text-red border-red": errors.text
                          }
                        )}
                      />
                      {errors.text && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
                      <p className="text-red mt-4 text-xs">{errorMessage}</p>
                      <Button text="enviar" type="secondary" className="mt-10" />
                    </form>
                  </div>
              }
        </div>
          </div>
        </div>
      </div>
      <div className="bg-green08 py-8">

        <div className="flex flex-col items-center mt-16 text-white text-center">
          <p className="text-sm mb-8">Promoção / Promoted by</p>
          <figure className="mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="163.436" height="72.573" viewBox="0 0 163.436 72.573">
            <g transform="translate(-105.804 -366)">
                <g transform="translate(40.62 306.849)">
                    <path fill="#fff" d="M102.466 116.046a5.957 5.957 0 0 1 0 11.909 5.945 5.945 0 0 1-5.9-5.982 5.882 5.882 0 0 1 5.9-5.927m-.055-3.769c-5.845 0-10.269 4.124-10.269 9.7 0 5.545 4.424 9.751 10.269 9.751s10.27-4.234 10.27-9.751c0-5.549-4.425-9.7-10.27-9.7zm-13.137 19.256v-19.119h-4.316v19.119zM69.5 122.465v-6.474h3.987c2.376 0 3.742 1.066 3.742 3.2 0 2.185-1.366 3.278-3.742 3.278zm7.428 9.068h4.889l-4.069-6.31c2.321-1.092 3.578-3.223 3.578-6.172 0-4.234-2.841-6.637-7.839-6.637h-8.3v19.119H69.5v-5.463h4.4z" />
                    <path fill="#fff" d="M220.235 129.456v-17.042h-2.185v19.119h10.57v-2.077zM209.61 124.6h-8.576l4.261-9.7zm.928 2.1l2.131 4.835h2.376l-8.545-19.121h-2.267l-8.575 19.119h2.321l2.13-4.835zm-13.492-12.182v-2.1h-14.667v2.1h6.228v17.017h2.185v-17.019zm-17.862 17.017v-19.121H177v19.119zm-18.273-17.017h4.917c3.441 0 5.435 1.475 5.435 4.371 0 2.977-1.994 4.506-5.435 4.506h-4.917zm-2.184-2.1v19.119h2.184V125.5h5c4.725 0 7.456-2.43 7.456-6.664 0-4.069-2.731-6.418-7.456-6.418zm-8.44 12.181h-8.576l4.26-9.7zm.929 2.1l2.13 4.835h2.376l-8.549-19.119h-2.267l-8.576 19.119h2.322l2.13-4.835zm-22.97-14.339a9.646 9.646 0 1 0-.082 19.283 10.56 10.56 0 0 0 7.1-2.95l-1.338-1.5a8.34 8.34 0 0 1-5.654 2.294 7.542 7.542 0 1 1 0-15.076 8.033 8.033 0 0 1 5.654 2.4l1.311-1.666a10.335 10.335 0 0 0-6.991-2.786z" />
                    <path fill="#fff" fillRule="evenodd" d="M52.8 139.85l-7.665-13.189a10.992 10.992 0 0 0 6.6-10.627v-.1c0-7.05-4.655-11.421-12.473-11.758-.342-.015-.643-.022-.991-.022H19.888l4.092 7.089H37.6c3.826 0 6.172 1.734 6.172 5.1v.1c0 3.008-2.193 5.049-6.018 5.048H33.13q5.3 9.18 10.593 18.359z"  transform="translate(109 -45)"/>
                    <path fill="#fff" fillRule="evenodd" d="M23.646 129.227H11.38l4.467-7.737h12.266l6.133 10.622-4.467 7.737z"  transform="translate(109 -45)"/>
                </g>
            </g>
        </svg>
          </figure>
        </div>
        <SocialMedia color="white" />
      </div>
    </div>
  )
}


const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default DesktopTEMP
