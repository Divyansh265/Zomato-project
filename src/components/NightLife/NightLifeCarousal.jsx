import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
//components
import PictureCarousalCard from "../PictureCarousalCard"

const NightLifeCarousal = () => {
    const [Dining] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/pictures/1/18983041/31109ef52f99ea794d705da5c706627a.jpg",
            title: "Key - Hotel Samrat",
            places: "9 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/pictures/0/303960/68e61bd2a5fe97adf587d30496d94cfe.png",
            title: "Slique",
            places: "4 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/pictures/5/19577475/a9150506655136673058d180c8167d9c.jpeg",
            title: "Kitty Su - The Lalit New Delhi",
            places: "7 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/pictures/1/19567911/f3e8a1376225dfd3cc32c605097973c0.jpg",
            title: "MisoSexy",
            places: "9 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/pictures/0/309850/4c2cce1c16a40f515a27ecc27075259e.jpg",
            title: "Bougie",
            places: "8 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/pictures/2/312902/2e3a98229ef00de30a9c7ad867bc0d5a.png",
            title: "Aviary ",
            places: "3 Places",
        },
    ])
    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
    };

    return (
        <div className='w-full'>
            <Swiper {...slideConfig}>
                {Dining.map((item, index) => (
                    <SwiperSlide key={index}>
                        <PictureCarousalCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default NightLifeCarousal