import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (<>
  <div class="container">
    <img src="/images/ca1.jpg" class="container_img" />
</div>
 
      <h1>CLEAN ADDIS</h1>
      <p className='lets'>LET'S MAKE OUR CITY CLEAN TOGETHER</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >

        </Button>
      </div>

    </>
  );
}

export default HeroSection;
