'use client';

import React, { useState, useRef, useEffect } from 'react';

const VideoGallery = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      src: '/videos/video1.mp4', // Replace with your actual video filename
      thumbnail: '/thumbnails/thumb1.jpg', // Optional: poster image
      duration: '0:43',
      isPlaying: true,
      isMuted: true,
      title: 'Zepto'
    },
    {
      id: 2,
      src: '/videos/video2.mp4', // Replace with your actual video filename
      thumbnail: '/thumbnails/thumb2.jpg',
      duration: '0:31',
      isPlaying: true,
      isMuted: true,
      title: 'I JUST MADE $65,000 SELLING SOMETHING'
    },
    {
      id: 3,
      src: '/videos/video3.mp4', // Replace with your actual video filename
      thumbnail: '/thumbnails/thumb3.jpg',
      duration: '1:05',
      isPlaying: true,
      isMuted: true,
      title: 'RECENT REALIZATIONS FOR THE 50 YO ME'
    },
    {
      id: 4,
      src: '/videos/video4.mp4', // Replace with your actual video filename
      thumbnail: '/thumbnails/thumb4.jpg',
      duration: '0:34',
      isMuted: true,
      isPlaying: true,
      title: 'WANT TO LOSE'
    }
  ]);

  const videoRefs = useRef([]);

  useEffect(() => {
    // Auto-play all videos when component mounts
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = true;
        video.play().catch(e => console.log('Autoplay prevented:', e));
      }
    });
  }, []);

  const togglePlayPause = (videoId) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === videoId ? { ...video, isPlaying: !video.isPlaying } : video
      )
    );

    const videoRef = videoRefs.current.find(ref => ref && ref.dataset.videoid == videoId);
    if (videoRef) {
      if (videoRef.paused) {
        videoRef.play().catch(e => console.log('Play failed:', e));
      } else {
        videoRef.pause();
      }
    }
  };

  const toggleMute = (videoId) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === videoId ? { ...video, isMuted: !video.isMuted } : video
      )
    );

    const videoRef = videoRefs.current.find(ref => ref && ref.dataset.videoid == videoId);
    if (videoRef) {
      videoRef.muted = !videoRef.muted;
    }
  };

  const handleVideoRef = (el, index) => {
    videoRefs.current[index] = el;
  };

  return (
    <>
    <div className="video-gallery-heading">
      <div className='head-one'>We turn <span>simple</span> content <span>viral.</span></div>
      <div className="head-two">Ideated from scratch, created for efficiency</div>
    </div>
    <div className="video-gallery">
      <div className="videos-container">
        {videos.map((video, index) => (
          <div key={video.id} className="video-card">
            <div className="video-wrapper">
              <video
                ref={(el) => handleVideoRef(el, index)}
                data-videoid={video.id}
                className="video-player"
                muted={video.isMuted}
                autoPlay
                loop
                playsInline
                poster={video.thumbnail}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Mute/Unmute Button */}
              <button
                className="mute-btn"
                onClick={() => toggleMute(video.id)}
                aria-label={video.isMuted ? 'Unmute video' : 'Mute video'}
              >
                {video.isMuted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                )}
              </button>

              {/* Play Button Overlay */}
              <div className="play-overlay" onClick={() => togglePlayPause(video.id)}>
                <div className="play-button">
                  {video.isPlaying ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </div>
              </div>

              {/* Video Controls */}
              <div className="video-controls">
                <div className="control-left">
                  <button className="control-btn play-pause" onClick={() => togglePlayPause(video.id)}>
                    {video.isPlaying ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </button>
                  <span className="duration">{video.duration}</span>
                </div>
                <div className="control-right">
                  <button className="control-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                  </button>
                  <button className="control-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Title Overlay */}
              {/* {video.title && video.title !== `Video ${video.id}` && (
                <div className="video-title">
                  {video.title}
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>

      <style >{`
        .video-gallery {
          padding: 20px;
          // min-height: 100vh;
        }

        .videos-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          
          // grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .video-card {
          border: 1px solid black;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          // background: #1a1a1a;
          // aspect-ratio: 3/9;
          width: 200px;
          height: 350px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .video-card:hover {
          transform: scale(1.02);
        }

        .video-wrapper {
          padding: 2px;
          position: relative;
          width: 100%;          
          height: 100%;
        }

        .video-player {
          border-radius: 12px;
          padding: 5px
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #000;
        }

        .mute-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 145, 0, 0.7);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .mute-btn:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;          
          background: rgba(255, 145, 0, 0.7);

          transition: opacity 0.2s ease;
          z-index: 5;
        }

        .video-card:hover .play-overlay {
          opacity: 1;
        }

        .play-button {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          // background: rgba(218, 165, 32, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .play-button:hover {
          // background: rgba(218, 165, 32, 1);
          transform: scale(1.1);
        }

        .video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          // background: rgba(218, 165, 32, 1);
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 20px 12px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .video-card:hover .video-controls {
          opacity: 1;
        }

        .control-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .control-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .control-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .duration {
          color: white;
          font-size: 12px;
          font-weight: 500;
          background: rgba(0, 0, 0, 0.6);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .video-title {
          position: absolute;
          top: 50%;
          left: 12px;
          right: 12px;
          transform: translateY(-50%);
          color: white;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          line-height: 1.2;
          z-index: 3;
        }

        @media (max-width: 768px) {
          .videos-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 15px;
            padding: 0 10px;
          }
          
          .video-gallery {
            padding: 15px;
          }
        }

        @media (max-width: 480px) {
          .videos-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style>{`
        .video-gallery-heading{
          text-align: center;
          margin-bottom: 60px;
        }
        .head-one {
          font-size: 4vw;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .head-one span:first-child {
          box-shadow: inset 0 -4px #fbb951;
        }
        .head-one span:last-child {
          color: #c6c6c6;
          text-decoration: underline;
        }
        @media (max-width: 480px) {
          .head-one {
            font-size: 5vw;

          }
        }
      `}</style>
    </div>
    </>
  );
};

export default VideoGallery;