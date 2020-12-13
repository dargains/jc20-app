import React from 'react'
import Button from '../components/Button'
import LogoImage from "../assets/images/logo rc.png";
import SocialMedia from '../components/SocialMedia';

const About = () => {
  return (
    <section className="pb-0">
      <figure className="w-2/5 mx-auto my-8">
        <img src={LogoImage} alt="Rio Capital" />
      </figure>
      <div
        className=" rounded-t-xl pt-16 pb-12"
        style={{ backgroundColor: "#2c3e4a" }}
      >
        <div className="wrapper text-white">
          <p className="mb-4">
            A Rio Capital é uma empresa privada de investimento imobiliário que
            desenvolve projetos de raiz, acompanhando todas as fases do projeto
            até a venda do ativo. Nosso diferencial é a solidez, a capacidade de
            decisão rápida e de procura de boas oportunidades no mercado e
            extenso “network” local.
          </p>
          <p className="mb-4">
            Presentemente com aproximadamente 30.000 m2 de construção acima do
            solo, divididos em 6 projetos, a Rio Capital está concentrada em
            dois seguimentos estratégicos: “state of the art” ativos
            residenciais e desenvolvimento de ativos de rendimento tais como
            hotéis, residências de Estudantes e residências Senior assistidas,
            todos na região da Grande Lisboa.
          </p>
          <Button
            text="Ir para website"
            type="secondary"
            className="mt-8 mb-12"
            handleClick={
              () => {
                window.open("https://www.riocapital.pt");
              }
            }
          />
          <SocialMedia color="white" size="md" />
        </div>
      </div>
    </section>
  );
}

export default About