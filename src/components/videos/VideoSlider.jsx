import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const VideoSlider = ({ videos, title, id }) => {
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 500);
  }, []);

  const youtubeClass = loding ? 'isLoding' : 'isLoaded';

  return (
    <section id={id} className={youtubeClass}>
      <h2>{title}</h2>
      <div className="video_slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={20} // 슬라이드 간의의 간격
          navigation={true} // Navigation 활성화화
          modules={[Navigation]} // Navigation 모듈 추가
          className={`mySwiper-${id}`}
          // 화면 크기에 따라 설정
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {videos.map((video, key) => (
            <SwiperSlide key={key}>
              <div className="video" key={key}>
                <div className="video_thumb play_icon">
                  <Link to={`/video/${video.videoId}`}>
                    <img src={video.img} alt={video.title} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSlider;
