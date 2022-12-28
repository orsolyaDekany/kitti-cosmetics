import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { eyeBrows, eyeLids, lips } from "./ImageGallery.data";
import SectionTitle from "../../components/sectiontitle/Sectiontitle";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  divPadding: {
    paddingTop: "70px",
  },
});

function ImageGallery() {
  const classes = useStyles();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { eyeBrows, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <div className={classes.divPadding}>
        <Gallery photos={eyeBrows} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={eyeBrows.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <div className={classes.divPadding}>
        <SectionTitle
          title="Szemhéjtetoválások"
          subtitle="Púderes, hibrid, szálas"
        ></SectionTitle>
        <Gallery photos={eyeLids} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={eyeLids.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <div className={classes.divPadding}>
        <SectionTitle
          title="Ajaktetoválások"
          subtitle="Púderes, hibrid, szálas"
        ></SectionTitle>
        <Gallery photos={lips} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={lips.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </>
  );
}

export default ImageGallery;
