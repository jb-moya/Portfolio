"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./../../globals.css";
import { Pagination, Autoplay } from "swiper/modules";

const Carousel = ({
    images,
    containerClassName,
}: {
    images: string[];
    containerClassName?: string;
}) => {
    console.log("🚀 ~ images:", images);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                centeredSlides={true}
                centeredSlidesBounds={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                speed={1500}
                modules={[Autoplay, Pagination]}
                className={clsx("mySwiper h-full w-full", containerClassName)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image}
                            alt="sample image of the project"
                            quality={100}
                            fill
                            loading="lazy"
                            className="flex w-auto h-auto object-contain content-center place-items-center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
