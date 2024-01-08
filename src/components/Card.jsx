import React from 'react';

const Card = () => {
  return (
    <div className="card-container">

      <div className="top-box">

        <h2 className='text-title'>Join hour community</h2>
        <h3 className='text-title2'>30-day,hassle-free money back guarantee</h3>

        <p className='text-title3'>Gain acces to our full of library of tutorials along wiht expert
          code reviews.</p>
        <p className='text-title3'> Perfect for any developers who are serious about honing theirs skills.</p>

      </div>

      <div className="bottom-container">

        <div className="small-box border-container1">
          <h3 className='text-title-smallbox'>Monthly Subscription</h3>
          <h1 className='number-text'>$29</h1>
          <p className='per-month'>per month</p>
          <p className='final-text-smallbox1'>Full access for less than $1 a day</p>
          <button className='login-button'>Sing Up</button>
        </div>

        <div className="small-box small-box-color border-container2">

          <h3 className='text-title-smallbox2'>Why us</h3>
          <p className='text-p'>Tutorials by industry experts <br /> Peer & expert code reviw <br />
            Coding exercises <br /> Access to our Github repos <br /> community forum <br />
            Flashcard decks <br /> New videos every week</p>
        </div>

      </div>
    </div>
  );
};

export default Card;