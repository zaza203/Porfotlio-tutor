import React from "react";
import "./portfolio.css";
import img1 from "../../assets/project-management.png";
import img2 from "../../assets/Project1.jpg";
import img3 from "../../assets/project2.jpg";
import ListPortfolio from "./listPortfolio";
import {useEffect, useState} from 'react';
import axios from 'axios'

export const Portfolio = () => {
  const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get(" https://scary-tan-rhinoceros.cyclic.app/api/portfolio").then(response => {
            const formattedData = response.data.data.map(item => ({
                id:item._id,
                image: item.image,
                title: item.title,  
                github: item.github,
                demo: item.demo
            }));
            setData(formattedData)            
        }).catch(error => {
            console.log("Error fetching portfolio data", error);
        })
      
    }, []);

  /*const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com/zaza203',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 1,
      title:'Project 1'
    },
    {
      image : img2,
      github: 'https://github.com/zaza203',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 2,
      title:'Project 2'
    },
    {
      image : img3,
      github: 'https://github.com/zaza203',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 3,
      title:'Project 3'
    },
    
  ]*/
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({ id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item__cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer"> Github</a>
                <a
                  href={demo} className="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
