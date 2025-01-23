import React from 'react';

import { youtubeText } from '../../data/youtube';
import { Link } from 'react-router-dom';

const Youtube = () => {
  return (
    <section id="website">
      <h2>지금 이 코딩을 영상으로</h2>
      <div className="video_inner">
        {youtubeText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video_thumb play_icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
