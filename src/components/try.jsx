import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photo";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

function Certificate() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* <motion.div variants={textVariant()}> */}
        <p className={styles.sectionSubText}>Well come to my</p>
        <h2 className={styles.sectionHeadText}>Certificate</h2>
        {/* </motion.div> */}
      </div>
      <div className={`${styles.padding} flex overflow-x-scroll gap-7`}>
        <Gallery
          className="gap-7"
          photos={certificates}
          onClick={openLightbox}
        />
        {/* <div onClick={openLightbox}>
          <img
            alt=""
            src="http://localhost:5174/src/assets/gallery/Hackaton%20Second%20Runner%20up.jpg"
          />  */}
        {/* </div> */}
        {/* <h2 className="legend">Tae</h2> */}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={certificates.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}
export default SectionWrapper(Certificate);
