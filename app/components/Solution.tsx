'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
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
                    modules={[EffectCoverflow, Autoplay, Pagination]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.6}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 80,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.4,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2.5,
                        },
                    }}
                    className="solution-swiper"
                >
                    {solutions.map((solution, index) => (
                        <SwiperSlide key={index} className="solution-slide">
                            <div className="solution-slide-inner">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    width={420}
                                    height={420}
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
