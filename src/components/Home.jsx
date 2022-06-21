import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import hero from '../assets/hero.png';
import herotext from '../assets/heroText.png';


const Home = () => {
  return (

       <Section>
<Navbar/>
<div className="ellipse"></div>
<div className="container">
    <div className="content">

    <h1>
        EXPLORE OUR
        <span>
            <img className='h-41' src={herotext} alt='hero image'/>
        </span>
         NFT MARKETPLACE
    </h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, est.

    </p>
    <div className='buttons'>
        <button className='text-white text-base cursor-pointer border rounded-3xl hover:bg-slate-200  text-center py-2 px-4 bg-blue-500'>
Explore Now
        </button>
        <button className='text-white text-base cursor-pointer border rounded-3xl hover:bg-slate-200  text-center py-2 px-4 bg-transparent'>
Create NFT
        </button>
    </div>
    <div className="data">
        <div className="datatab">
            <h2> 40K</h2>
            <h5>Art Work</h5>
        </div>
        <div className="datatab">
            <h2> 10K</h2>
            <h5>Auction</h5>
        </div>
        <div className="datatab">
            <h2> 20K</h2>
            <h5>Artist</h5>
        </div>
    </div>
    </div>
    <div className="image">
        <img src={hero} alt="main image"/>
    </div>
    </div>
  
</Section>
 
  )
}
const Section = styled.section`
margin:0.5rem;
background-color:#232835;
border-radius: 1rem;
height: 100vh;
position: relative;
overflow:hidden;
margin-bottom: 5rem;
.ellipse{
 
    height: 10rem;
    width: 30rem;
    background-color: #ae54c27d;
    opacity: 0.5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
}
.container{
    padding:2rem;
    margin: 0 2rem;
    display: flex;
    .content{
z-index:10;
display:flex;
flex-direction: column;
gap:2rem;
margin-top: 5rem;
padding-right: 2rem;
h1{
    color:white;
    font-size: 2.5rem;

}
p{
    color:#a6a6a6;

}
.buttons{
    display:flex;
    gap:2rem;

}.data{
    display: flex;
    gap:5rem;
}
.datatab{
    display:flex;
    flex-direction:column;
    gap: 1rem;
    h2{
        color: #fff;
        font-size: 2rem;
    }
    h5{
        text-align: center;
        color: #a6a6a6;

    }
}
    }
}
.image{
    img{
        height: 30rem;

    }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    border-radius: 0;
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        h1 {
          font-size: 3rem;
          span {
            img {
              height: 2rem;
            }
          }
        }
        .buttons {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .data {
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }
      }
      .image {
        img {
          height: 15rem;
        }
      }
    }
  }
`

export default Home