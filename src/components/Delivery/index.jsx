import React, { useState } from 'react'

//components
import DeliveryCarousal from './DeliveryCarousal'
import RestaurantCard from '../RestaurantCard'
import DeliveryCarousel2 from './DeliveryCarousal2'


const Delivery = () => {
    const [RestaurantList, setRestaurantList] = useState([
        {
            _id: "124ksjf435245jv34fg3",
            isPro: true,
            isOff: true,
            name: "Nathu's Sweets",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Mithai",
                "South Indian",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
        {
            _id: "sdffdsadadsfadfadsfadsf",
            isPro: true,
            isOff: false,
            name: "Master Koii's",
            restaurantReviewValue: "4.6",
            cuisine:
                [
                    "Asian",
                    "Chinese",
                    "Thai",
                    "Malaysian",
                    "Korean"
                ],
            averageCost: "600",
        },
        {
            _id: "124ksjf435245jfdfv34fg3",
            isPro: true,
            isOff: true,
            name: "Al Huboor",
            restaurantReviewValue: "3.7",
            cuisine: [

                "North Indian",
                "Mughlai",
                "Street Food",
                "Fast Food",
                "Desserts",

            ],
            averageCost: "350",
        },
    ])

    return (
        <>
            <DeliveryCarousal />
            <DeliveryCarousel2 />
            <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
                Delivery Restaurants in NCR (Delhi)
            </h1>
            <div className='flex justify-start flex-wrap mt-5 ' >
                {RestaurantList.map((restaurant) => (
                    <RestaurantCard{...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
}

export default Delivery