import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const DeliveryCarousel2 = () => {
    const categories = [
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
            title: "McDonald's",
            timing: "15 min",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
            title: "Haldiram's",
            timing: "30 min",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp",
            title: "Subway",
            timing: "16 min",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
            title: "Burger King",
            timing: "35 min",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
            title: "Pizza Hut",
            timing: "25 min",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/28650b1e4109f8a6ad34c5fc5cb5b2a7_1602854588.png?output-format=webp",
            title: "Starbucks Coffee",
            timing: "40 min",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp",
            title: "Theobroma",
            timing: "12 min",

        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
            title: "KFC",
            timing: "18 min",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
            title: "Bikanervala",
            timing: "32 min",
        },
    ];

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
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
    };

    return (
        <>
            <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
                Top brands for you
            </h1>
            <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
                {categories.map((food, index) => (
                    <DeliveryCategoryCard key={index} {...food} />
                ))}
            </div>
            <div className="hidden lg:block">
                <Swiper {...slideConfig}>
                    {categories.map((food, index) => (
                        <SwiperSlide key={index}>
                            <DeliveryCategoryCard {...food} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default DeliveryCarousel2;