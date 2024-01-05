// components/VideoThumbnail.jsx
import React, { useEffect, useState } from "react";
import VideoThumbnail from "react-video-thumbnail";

const VideoThumbnailComp = ({ videoUrl, width = 120, height = 80 }) => {
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <VideoThumbnail
      videoUrl="https://firebasestorage.googleapis.com/v0/b/afnan-recipes.appspot.com/o/videos%2F2024-01-02%2021%3A51%3A21.003803.mp4?alt=media&token=b3c07134-accf-4133-9b64-6afd7c43b566"
      thumbnailHandler={(thumbnail) => console.log(thumbnail)}
    />
  );
};

//   return thumbnail ? (
//     <img src={thumbnail} alt="Video Thumbnail" width={width} height={height} />
//   ) : (
//     <p>Loading Thumbnail...</p>
//   );
// };

export default VideoThumbnailComp;
