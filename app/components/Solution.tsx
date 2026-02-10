'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Solution() {
    const solutions = [
        {
            image: "/images/solutions/client-intake.webp",
            title: "Client Intake",
        },
        {
            image: "/images/solutions/medical-records.webp",
            title: "Medical Records",
        },
        {
            image: "/images/solutions/demand-letters.webp",
            title: "Demand Letters",
        },
        {
            image: "/images/solutions/client-communication.webp",
            title: "Client Communication",
        },
        {
            image: "/images/solutions/settlement-coordination.webp",
            title: "Settlement Coordination",
        },
        {
            image: "/images/solutions/end-to-end-management.webp",
            title: "End-to-End Management",
        }
    ];

    return (
        <section className="solution">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">The Solution</div>
                    <h2 className="section-title">Your Dedicated Backend Team, Ready in 2 Weeks</h2>
                    <p className="section-subtitle">We handle everything from intake to settlement, supervised by experienced attorneys.</p>
                </div>
            </div>
            <div className="solution-carousel-wrapper">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    className="solution-swiper"
                >
                    {solutions.map((solution, index) => (
                        <SwiperSlide key={index} className="solution-slide">
                            <div className="solution-slide-inner">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    width={600}
                                    height={600}
                                    className="solution-slide-img"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
