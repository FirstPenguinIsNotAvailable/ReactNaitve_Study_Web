
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';


const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const storedFoodInfos = localStorage.getItem('popular');

      if(storedFoodInfos){
        setPopular(JSON.parse(storedFoodInfos));
      } else {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }

    }
    
    getPopular();
  }, []);


  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
         }}>
        { popular.map(recipe => {
          return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p key={recipe.id}>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
          );
        }) }
        </Splide>
      </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`
  margin: 4rem 0rem;
  display: block;
  overflow: auto;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    object-fit: cover;
    width: auto;
    height: 100%;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50;
    bottom: 0%;
    color: white;
    width: 80%;
    transform: translate(10%, 0%);
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

/**
 * * z-index *
 * @description
 *  position 속성을 이용하면 요소를 겹치게 놓을 수 있습니다. 
 *  이때 요소들의 수직 위치를 z-index 속성으로 정합니다. 
 *  값은 정수이며, 숫자가 클 수록 위로 올라오고, 숫자가 작을 수록 아래로 내려갑니다.
 * 
 * @ref 
 *  https://www.codingfactory.net/10878
 * 
 * 
 */

/**
 * * gradient *
 * @description
 *  <image> 자료형의 특별한 종류인 <gradient>로 나타내며 두 개 이상의 색 간의 점진적 전환을 표현합니다. 
 * 
 * @ref
 *  https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients
 */


const Gradient = styled.div`
  z-indx: 3;
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;


export default Popular;