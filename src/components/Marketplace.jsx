import React from 'react'
import styled from 'styled-components';
import {BsThreeDots} from "react-icons/bs";
import {FaEthereum} from "react-icons/fa";
import marketplace1 from '../assets/marketplace1.png';
import marketplace2 from '../assets/marketplace2.png';
import marketplace3 from '../assets/marketplace3.png';
import marketplace4 from '../assets/marketplace4.png';
import marketplace5 from '../assets/marketplace5.png';
import marketplace6 from '../assets/marketplace6.png';
import marketplace7 from '../assets/marketplace7.png';
import marketplace8 from '../assets/marketplace8.png';
const Marketplace = () => {
    const marketPlaceData = [
        {
            image: marketplace1,
            name: "bodyy-poo",
            price: "3ETH",
        },
        {
            image: marketplace2,
            name: "bodyy-poo-doo",
            price: "8ETH",
        },
        {
            image: marketplace3,
            name: "bodyy-poo-too",
            price: "1.3ETH",
        },
        {
            image: marketplace4,
            name: "bodyy-poo-moo",
            price: "9ETH",
        },
        {
            image: marketplace5,
            name: "bodyy-poo-foo",
            price: "6ETH",
        },
        {
            image: marketplace6,
            name: "bodyy-poo-poo",
            price: "9ETH",
        },
        {
            image: marketplace7,
            name: "bodyy-poo-loo",
            price: "13ETH",
        },
        {
            image: marketplace8,
            name: "bodyy-poo-boo",
            price: "73ETH",
        },
    ];
    const marketPlaceType = [
"All",
"Art",
"Generic",
"Common",
"Trading",
"Rare"
    ];
  return (
    <Section>
<div className="title">

<h2>NFT Marketplace</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, aut et. Beatae ipsum sapiente laudantium?

</p>
<div className="marketPlaceTypes">
{marketPlaceType.map((text, index) => {
     if(index==0){
        return  ( <button key={index} className='text-white text-base cursor-pointer  hover:bg-slate-200 rounded-3xl text-center w-1/4 py-2 px-4 bg-blue-500'>{text}</button>   )  
   
       }
       else{
           return    ( <button key={index} className='text-black text-base cursor-pointer border rounded-3xl hover:bg-slate-200  text-center py-2 px-4 bg-transparent'>{text}</button>   )  
   
       }
}
)}


    
          
   
         </div>
<div className="marketPlaces">
    {
        marketPlaceData.map(({image,name,price}) => {
            return (
                <div className="marketplace">
                    <div className="image">
                        <img src={image} alt="Nft Image"/>
                    </div>
                    <div className="name username">
                        <h4>{name}</h4>
                        <BsThreeDots/>
                    </div>
                 <div className="price-container">
                    <h5 class='price'>
{price}
<FaEthereum/>
                    </h5>
                 </div>
                </div>
            )
        })
    }
</div>
</div>

    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
gap: 5rem;
margin: 0 6rem;
margin-bottom: 5rem;
.title{
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:3rem;
    justify-content: center;
    h2{
        font-size: 3rem;

    }
    p{
        color: #7b7e86;
    }


}
.marketPlaceTypes{
    display:flex;
    justify-content: center;
    gap: 2rem;
}
.marketPlaces{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap: 2rem;
    .marketplace:hover{
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    .marketplace{
       box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
       padding: 0.5rem;
       border-radius: 1rem;
       width:max-content;
       cursor: pointer;
       transition: 0.5s ease-in-out
      
       image{
        margin-bottom: 1rem;
       }
       .name{
        display:flex;
        color: #222222;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
       }
       .username{
        color: #555555;
        font-size: 0.8rem;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
       }
       .price{
        padding: 0 1rem;
        display:flex;
        justify-content: space-between;
        color: #02204e;
       }
    }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .marketPlaceTypes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketPlaces {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

`
export default Marketplace