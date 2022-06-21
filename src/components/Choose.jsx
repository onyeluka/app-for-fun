import React from 'react';
import styled from 'styled-components';
import choose from '../assets/choose.png';
const Choose = () => {
  return (
    <Section>
<div className="image">
    <img src={choose} alt='choose us'/>
</div>
<div className="content">
    <h2> Why You Should Trade With Us</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem tempora ratione molestias a aut, architecto quaerat omnis distinctio ad.

    </p>
    <button className='text-white text-base cursor-pointer  hover:bg-slate-200 rounded-3xl text-center w-1/4 py-2 px-4 bg-blue-500'>
Read More
        </button>
</div>

    </Section>
  )
}
const Section = styled.section`
display: flex;
justify-content: center;
align-content: center;
margin: 0 9rem;
gap: 3rem;
margin-bottom: 5rem;
.image {
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  h2 {
    font-size: 4rem;
  }
  p {
    color: #7b7e86;
    line-height: 2rem;
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  flex-direction: column;
  margin: 2rem;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 50vw;
    }
  }
  .content {
    gap: 1rem;
    h2 {
      font-size: 1rem;
    }
    p {
      line-height: 1.3rem;
      font-size: 0.9rem;
    }
  }
}

`
export default Choose