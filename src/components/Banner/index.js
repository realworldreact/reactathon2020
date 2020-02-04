import React from "react";
import Video from "../Video";
import { getScreenWidth } from "../../utils/window";
import { NATIVE_BREAKPOINT } from "../../constants";
import "./index.css";

const Banner = ({ className = "", content, video }) => {
  const shouldLoadVideo = getScreenWidth() > NATIVE_BREAKPOINT;
  return video && shouldLoadVideo ? (
    <div className="banner">
      <div className="banner-video-wrap">
        <div className="banner-video-overlay"></div>
        {video && (
          <Video
            className="banner-video"
            loop={true}
            autoPlay
            muted
            showControls={false}
            src={video && shouldLoadVideo && video.src}
            poster={
              video && (shouldLoadVideo ? video.poster : video.mobilePoster)
            }
            isExternalSource={false}
          />
        )}
        <div className="banner-content-overlay">{content}</div>
      </div>
    </div>
  ) : (
    <div className={`banner banner-content ${className}`}>{content}</div>
  );
};

export default Banner;
