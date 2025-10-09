import React, { useEffect, useState } from "react";
import "./MoviePage.scss";

/**
 * Movies listing page.
 *
 * @component
 * @returns {JSX.Element} A heading for the movies section.
 */
const MoviePage: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  async function getData() {
    const url : string = `${ import.meta.env.VITE_API_LOCAL_URL}/videos/popular`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      //console.log(result);
      setVideos(result.videos);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <div className="movie-page">
      <h1>Peliculas </h1>

      <div>
        {
          videos && videos.map((video: any) =>
            <video controls src={video.video_files[0].link} />
          )
        }
      </div>
    </div>
  );
};

export default MoviePage;
