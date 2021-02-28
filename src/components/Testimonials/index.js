import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Quote from '../Quote'
import ShapeTop from '../ShapeTop'
import ShapeBottom from '../ShapeBottom'
import { quotes } from './content'

const Testimonials = () =>  {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <TestimonialsContainer>
      <ShapeTop />
      <TestimonialsTitle>O que nossos clientes dizem</TestimonialsTitle>
      <Slider {...settings}>
        {quotes.map((item, index) => (
          <Quote 
            key={index}
            image={item.image}
            name={item.name}
            office={item.office}
            text={item.text}
          />
        ))}
      </Slider>
      {/* <Carousel /> */}
      <ShapeBottom />
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.section`
  background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
  padding: 8rem calc((100vw - 1280px) / 2);
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--white);

  .slick-slider {
    display: flex;
    justify-content: center;

    /* .slick-prev{
      left: -1.5rem;

      &::before{
        color: var(--gold);
      }
    }

    .slick-next{
      right: -1.5rem;

      &::before{
        color: var(--gold);
      }
    } */

    .slick-track {
      display: flex;
      justify-content: center;

      .slick-slide {
        display: flex;
        justify-content: center;
      }
    }
  }
`

const TestimonialsTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: 'Quantify';
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`