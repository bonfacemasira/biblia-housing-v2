import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoBanner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
     
      <div
        className="ltn__video-bg-img bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1"
        style={{ backgroundImage: `url("../img/Land Project  Photos-202.jpg")` }}
      >
       
      </div>
    </>
  );
};

export default VideoBanner;
