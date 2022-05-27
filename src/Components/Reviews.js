import React from 'react'
import reviewsList from '../reviewsList'
import {FcPrevious, FcNext} from "react-icons/fc"
import {FaQuoteLeft} from "react-icons/fa"

export const Reviews = () => {

    const [list, setList] = React.useState(reviewsList)
    const [counter, setCounter] = React.useState(0)

    const increase = () => {
        if (counter == list.length - 1) {
            setCounter(0)
        }
        else {
            setCounter(prevCounter => prevCounter+1)
        } 
    }
    
    const decrease = () => {
        if (counter == 0) {
            setCounter(list.length-1)
        } 
        else {
            setCounter(prevCounter => prevCounter-1)
        }
    }

    const randomNumber = () => {
      const generatedRanNum = Math.floor(Math.random() * list.length)
      console.log(Math.random());
      setCounter(generatedRanNum)
    }
    
  return (
    <div className='reviews-container'>
      <div className='reviews-img-container'>
          <img src={list[counter].img} width="150px" height="150px" />
        <span>
          <FaQuoteLeft />
        </span>
      </div>

      <div className='reviews-info-container'>
        <h3>
          {list[counter].name}
        </h3>
        <div>
          {list[counter].job}
        </div>
        <p>
          {list[counter].text}
        </p>
      </div>
      <div className='next-prev-buttons'>
        <button onClick={decrease}>
            <FcPrevious />
        </button>
        <button onClick={increase}>
        <FcNext />
        </button>
      </div>
      <div className='random-button-container'>
        <button onClick={randomNumber}>
        Surprise Me!
        </button>
      </div>
    </div>
  )
}
