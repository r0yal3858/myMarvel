import { Player } from "video-react";
import "./home.css";
import videox from "../video.mp4";
export const Home = () => {
  return (
    <>
      <div className="home__video">
        <video src={`${videox}#t=1.5`} autoPlay loop muted />
      </div>
    </>
  );
};
