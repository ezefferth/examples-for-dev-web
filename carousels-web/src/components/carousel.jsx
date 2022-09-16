import Carousel from 'react-bootstrap/Carousel';

import fundo from '../assets/fundo.png'

import React from 'react'


export default function Carousels() {
  return (
    <Carousel >
      {/* cada Carousel.Item vc acresenta as imagens e textos conforme sua necessidade*/}
      <Carousel.Item>
        <img
          /* em styles temos o tamanho da img, e seu comportamento se baseará aqui,
           
           */
          className='d-block w-100'
          style={{
            height: '100vh',
            width: '100vw',
            objectFit: 'cover', //objectFit: 'cover', mantem a proporção original da img
          }}
          /* vc poderá estar importando outras imagens para o carousel */
          src={fundo}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* em caption, pode por as tags html h1,h2,h3..h6 ou qualquer
          tag para texto e caso necessário estar mudando as fontes e tamanhos
          conforme a necessidade.
          */}
          <h3>Primeiro Carousel</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'

          style={{
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
          }}
          src={fundo}
          alt="Second slide"
        />
        <Carousel.Caption>

          <h3>Segundo Carousel</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}
