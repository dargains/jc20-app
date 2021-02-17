import React, {useState} from 'react'
import Video from '../assets/videos/video.mp4'
import RC from '../assets/images/rc logo.svg'
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
import ImageOverlay from '../components/ImageOverlay';

const anchors = [
  {
    label: 'imagens',
    anchor: 'images'
  },
  {
    label: 'apartamentos',
    anchor: 'apartments'
  },
  {
    label: 'localização',
    anchor: 'location'
  },
  {
    label: 'Rio Capital',
    anchor: 'riocapital'
  },
  {
    label: 'contatos',
    anchor: 'contacts'
  }
]

const galleryImages = [
  {
    src: require("../assets/images/3d/Fachada Diurna.jpg"),
    alt: 'Fachada',
  },
  {
    src: require("../assets/images/3d/Fachada Noturna.jpg"),
    alt: 'Fachada',
  },
  {
    src: require("../assets/images/3d/Cozinha FR C_D_E.jpg"),
    alt: 'Cozinha',
  },
  {
    src: require("../assets/images/3d/Escada Fr G.jpg"),
    alt: 'Escada',
  },
  {
    src: require("../assets/images/3d/Garagem.jpg"),
    alt: 'Garagem'
  },
  {
    src: require("../assets/images/3d/Hall de entrada.jpg"),
    alt: 'Hall de entrada'
  },
  {
    src: require("../assets/images/3d/IS Suite_FR A.jpg"),
    alt: 'Suite',
  },
  {
    src: require("../assets/images/3d/Porta Entrada.jpg"),
    alt: 'Porta de entrada'
  },
  {
    src: require("../assets/images/3d/Sala_Fr C_D_E.jpg"),
    alt: 'Sala'
  },
  {
    src: require("../assets/images/3d/Suite_Fr A.jpg"),
    alt: 'Suite',
  },
  {
    src: require("../assets/images/3d/Terraço_Fr B.jpg"),
    alt: 'Terraço'
  },
  {
    src: require("../assets/images/3d/Terraço_Fr F.jpg"),
    alt: 'Terraço'
  },
]

const floorImages = [
  {
    src: require("../assets/images/floorplans/FR A.png"),
    alt: 'A',
  },
  {
    src: require("../assets/images/floorplans/FR B.png"),
    alt: 'B',
  },
  {
    src: require("../assets/images/floorplans/FR C.png"),
    alt: 'C',
  },
  {
    src: require("../assets/images/floorplans/FR D.png"),
    alt: 'D',
  },
  {
    src: require("../assets/images/floorplans/FR E.png"),
    alt: 'E',
  },
  {
    src: require("../assets/images/floorplans/FR F.png"),
    alt: 'F',
  },
  {
    src: require("../assets/images/floorplans/FR G.png"),
    alt: 'G',
  },
  {
    src: require("../assets/images/floorplans/FR H.png"),
    alt: 'H',
  },
]

const DesktopView = () => {
  const [errorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState(false)
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
    <section className="desktop hidden lg:block py-0 overflow-hidden">

      <header className="absolute text-center w-full py-10 z-20">
        <nav>
          {
            anchors.map(({label, anchor}) => <a key={anchor} href={`#${anchor}`} className="text-base text-white uppercase font-normal mx-4" onClick={() => {}}>{label}</a>)
          }
        </nav>
      </header>
      
      {/* VIDEO */}
      <section className="p-0 z-10">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="w-full h-full absolute top-0 left-0" style={{backgroundImage: "linear-gradient(to bottom, rgba(18, 16, 16, 0.4) 0%, rgba(96, 95, 95, 0.1) 100%)"}}></div>
        <figure className="center-horizontal w-4 animate-arrow" style={{bottom: -30}}>
          <img src={require("../assets/images/arrow.svg")} alt=""/>
        </figure>
        <figure className="absolute z-10 left-0 pointer-events-none" style={{ bottom: -306, maxWidth: 300, width: '20%' }}>
          <img src={require("../assets/images/triangle.svg")} alt=""/>
        </figure>
      </section>

      {/* FAMILY */}
      <section className="p-0 overflow-hidden">
        <div className="wrapper z-10 py-12 xl:py-24">
          <h2 className="font-display uppercase text-4xl font-semibold ml-16 w-1/4 xl:w-1/5">
            <p className="text-green"><span className="text-black">O melhor para a</span> sua família</p>
          </h2>
          <div className="flex flex-wrap items-top w-1/2 mt-16">
            <article className="w-1/2 flex items-center mb-16">
              <figure className="w-20 mr-4">
                <img src={require("../assets/images/localizacao.svg")} alt="Localização"/>
              </figure>
              <div className="font-display text-xl font-normal uppercase">
                <p className="text-green08">Localização</p>
                <p className="text-green">Privilegiada</p>
              </div>
            </article>
            <article className="w-1/2 flex items-center mb-16">
              <figure className="w-20 mr-4">
                <img src={require("../assets/images/diamante.svg")} alt="Localização"/>
              </figure>
              <div className="font-display text-xl font-normal uppercase">
                <p className="text-green08">acabamentos de</p>
                <p className="text-green">alta gama</p>
              </div>
            </article>
            <article className="w-1/2 flex items-center">
              <figure className="w-20 mr-4">
                <img src={require("../assets/images/folha-de-cha.svg")} alt="Localização"/>
              </figure>
              <div className="font-display text-xl font-normal uppercase">
                <p className="text-green08">jardim e</p>
                <p className="text-green">terraços</p>
              </div>
            </article>
            <article className="w-1/2 flex items-center">
              <figure className="w-20 mr-4">
                <img src={require("../assets/images/carro.svg")} alt="Localização"/>
              </figure>
              <div className="font-display text-xl font-normal uppercase">
                <p className="text-green08">garagem</p>
                <p className="text-green">coberta</p>
              </div>
            </article>
          </div>
        </div>
        <div className="flex justify-end w-full absolute top-0 left-0">
          <figure className="w-2/3">
            <img src={require("../assets/images/desktop family.jpg")} alt="Family"/>
          </figure>
          <figure className="absolute top-0 left-0 w-1/2 h-full">
            <img style={{ width: '140%', height: '100%'}} src={require("../assets/images/fade.png")} alt=""/>
          </figure>
        </div>
      </section>

      {/* IMAGES */}
      <section id="images">
        <figure className="absolute z-10 right-0 transform rotate-180 pointer-events-none" style={{ top: -360, maxWidth: 300, width: '20%' }}>
          <img src={require("../assets/images/triangle.svg")} alt=""/>
        </figure>

        <div className="wrapper">
          <h2 className="font-display font-semibold text-green08 text-5xl mt-16 mb-4">
            <span className="text-green">Apaixone-se</span> pelo seu novo lar
          </h2>
        </div>
        <div className="bg-green05 absolute w-full bottom-0" style={{height: '50%'}}></div>
        <Carousel
          showThumbs={false}
          showArrows
          showStatus={false}
          centerMode
        >
          {galleryImages.map(image => 
            <figure className="h-full mx-4" style={ {maxHeight: 600, width: '300' }} key={image.src} onClick={({target}) => {
              if(target.closest('.slide').classList.contains('selected')) {
                setShowImage(true);
                setSelectedImage(image)
              }
            }}>
              <img src={image.src} alt={image.alt} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
            </figure>
          )}
        </Carousel>
        <figure className="absolute z-10 left-0 pointer-events-none" style={{ bottom: -314, maxWidth: 300, width: '20%' }}>
          <img src={require("../assets/images/triangle.svg")} alt=""/>
        </figure>
      </section>
      
      {/* APARTMENTS */}
      <section id="apartments" className="bg-green05">
        <div className="wrapper">
          <Carousel
            showThumbs={false}
            showArrows
            showStatus={false}
            showIndicators={false}
            centerMode
          >
            {floorImages.map(image => 
              <div className="h-full mx-4" onClick={({target}) => {
                console.log(target);
                if(target.closest('.slide').classList.contains('selected')) {
                  setShowImage(true);
                  setSelectedImage(image)
                }
              }}>
                <p className="text-white text-3xl font-bold uppercase text-right">Apartamento <span className="text-green">{image.alt}</span></p>
                <figure style={ {maxHeight: 700, height: '100%' }} key={image.src}>
                  <img src={image.src} alt={image.alt} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
                </figure>
              </div>
            )}
          </Carousel>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-16">
        <div className="wrapper flex">
          <div className="w-1/3">
            <h2 className="font-display uppercase text-4xl font-semibold">
              <p className="text-green">Saldanha</p>
              <span className="text-black">Life style</span>
            </h2>
            <p className="text-green mt-8">
              Localizado no elegante bairro das Avenidas Novas, Avenida Living está no coração da cidade, beneficiando de toda a centralidade. Ao seu redor, dispõe de uma vasta oferta de espaços de cultura e lazer, bem como de escolas e hospitais e de diversas zonas que lhe oferecem um contacto imperdível com a natureza.
            </p>
            <a
              href="https://goo.gl/maps/36hN888xgzqRSN1X9"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8"
            >
              <Button text="ver mapa" type="primary" />
            </a>

          </div>
          <figure className="w-2/3 pl-6">
            <img src={require("../assets/images/desktop map.jpg")} alt="Mapa"/>
          </figure>
        </div>
      </section>

      {/* RIO CAPITAL */}
      <section id="riocapital" className="py-0">
        <figure className="absolute z-10 left-0 pointer-events-none" style={{ top: -140, maxWidth: 300, width: '20%' }}>
          <img src={require("../assets/images/triangle.svg")} alt=""/>
        </figure>
        <figure className="w-64 mx-auto mb-10">
          <img src={RC} alt="Rio Capital"/>
        </figure>
        <div style={{ backgroundColor: "#2c3e4a" }} className=" pt-16 pb-4">
          <div className="wrapper text-white w-1/2">
            <p className="mb-4">
              A Rio Capital é uma empresa privada de investimento imobiliário que desenvolve projetos de raiz, acompanhando todas as fases do projeto até a venda do ativo. Nosso diferencial é a solidez, a capacidade de decisão rápida e de procura de boas oportunidades no mercado e extenso “network” local.
            </p>
            <p>
              Presentemente com aproximadamente 30.000 m2 de construção acima do solo, divididos em 6 projetos, a Rio Capital está concentrada em dois seguimentos estratégicos: “state of the art” ativos residenciais e desenvolvimento de ativos de rendimento tais como hotéis, residências de Estudantes e residências Senior assistidas, todos na região da Grande Lisboa.
            </p>
            <Button
              text="ir para website"
              type="secondary"
              className="my-12 mx-auto"
              handleClick={
                () => {
                  window.open('https://www.riocapital.pt');
                }
              }
            />
            <SocialMedia color="white" />
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-green04">
        <figure className="absolute z-10 right-0 transform rotate-180 pointer-events-none" style={{ top: -200, maxWidth: 300, width: '20%' }}>
          <img src={require("../assets/images/triangle.svg")} alt=""/>
        </figure>
        <div className="wrapper py-8">
          <div className="flex">
            <div className="w-1/2">
              <figure>
                <img src={require("../assets/images/computer.jpg")} alt="Contato"/>
              </figure>
              <p className="mt-4 text-white">ou através do número</p>
              <a href="tel:+351964074080" className="inline-block text-white border border-white rounded-lg p-4 text-center text-4xl font-bold font-display">
                <span className="text-black">+351</span> 964 074 080
              </a>
            </div>
            <div className="w-1/2 pl-10">
              <h3 className="font-display text-white font-semibold text-5xl mb-4">Vamos <span className="text-green">conversar?</span></h3>
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
                          color="white"
                          placeholder="nome"
                          name="name"
                          error={errors.name}
                          register={register({required: true})}
                          required={true}
                        />
                        {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

                        <Inputbox
                          type="email"
                          color="white"
                          placeholder="e-mail"
                          name="email"
                          error={errors.email}
                          register={register({required: true})}
                          required={true}
                        />
                        {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

                        <Inputbox
                          type="text"
                          color="white"
                          placeholder="assunto"
                          name="subject"
                          error={errors.subject}
                          register={register({required: true})}
                          required={true}
                        />
                        {errors.subject && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

                        <textarea
                          color="white"
                          placeholder="texto"
                          name="text"
                          rows="5"
                          error={errors.text}
                          ref={register({required: true})}
                          className={cx(
                            "border-b bg-transparent w-full py-1 mt-6 text-white border-white",
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
      </section>
    

      <ImageOverlay
        src={selectedImage.src}
        alt={selectedImage.alt}
        showImage={showImage}
        normal
        handleClose={() => {
          setShowImage(false);
        }}
      />
    </section>
  )
}


const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default DesktopView
