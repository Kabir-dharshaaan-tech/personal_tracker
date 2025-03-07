import React, { useState } from "react";

const VideoPage = () => {
  const [savedVideos, setSavedVideos] = useState([]);
  const [videoURL, setVideoURL] = useState("");

  const addVideo = () => {
    if (videoURL.trim() !== "") {
      setSavedVideos([...savedVideos, videoURL]);
      setVideoURL("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen flex flex-col items-center p-6 text-white">
      <h2 className="text-3xl font-bold mb-4">My Recommended Videos</h2>
      <div className="w-full max-w-md flex gap-2">
        <input
          type="text"
          placeholder="Paste YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-black"
        />
        <button
          onClick={addVideo}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
          Add Video
        </button>
      </div>

      <div className="mt-6 w-full max-w-2xl">
        {savedVideos.map((url, index) => (
          <div key={index} className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <iframe
              width="100%"
              height="315"
              src={url.replace("watch?v=", "embed/")}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
