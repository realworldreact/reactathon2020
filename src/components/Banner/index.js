import React from "react";
import Video from "../Video";
import { getScreenWidth } from "../../utils/window";
import { NATIVE_BREAKPOINT } from "../../constants";
import "./index.css";
import homeVideo from "../../assets/videos/home-header-video.mp4";

const Banner = ({ className = "", content, video = { src: homeVideo } }) => {
  const shouldLoadVideo = getScreenWidth() > NATIVE_BREAKPOINT;
  console.log(video, shouldLoadVideo);
  return video && shouldLoadVideo ? (
    <div className="banner">
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
  ) : (
    <div className={`banner banner-content ${className}`}>{content}</div>
  );
};

export default Banner;
