import React from 'react'

export default (props) => {
  return (
    <div className='menu-item'>
            <img src={props.img} />
        <div className='menu-item-info-container'>
            <div className='menu-item-title'>
                <h3>
                    {props.title}
                </h3>
                <div>
                    {props.price}
                </div>
            </div>
            <div>
                <p>
                    {props.desc}
                </p>
            </div>
        </div>
    </div>
  )
}
