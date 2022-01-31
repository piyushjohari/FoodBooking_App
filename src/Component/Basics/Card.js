import React from 'react';
import "./Card.css";
const Card = ({ menudata }) => {
    console.log("HI", menudata)
    return (
        <div>
            {menudata.map((curr) => {
                return (
                    <div className="card-out" key={curr.id}>
                        <div className='cards'>
                            <div className='card-num'>{curr.id}</div>
                            <div className='card-time'>{curr.category}</div>
                            <div className='card-food-Name'>{curr.name}</div>
                            <div className='card-food-desc'>{curr.description} </div>
                            <div className='read'>Read</div>
                            <div className='card-img'>
                                <img src={curr.image} />
                            </div>
                            <div className='order'>
                                <span class="item-price"><b>Price:{curr.price}</b></span>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>

                )
            })

            }
        </div>   
    )
};

export default Card;
