import React, { useState } from 'react';
import styles from './Carousel.module.css';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Condition pour vérifier s'il y a plus d'une image
  const hasMultipleImages = images.length > 1;

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div className={styles.navigation}>
        {hasMultipleImages && ( // Affiche les boutons de navigation uniquement s'il y a plus d'une image
          <>
            <button className={styles.prevButton} onClick={goToPreviousImage}>
              &lt;
            </button>
            <div className={styles.imageIndicator}>
              {currentImageIndex + 1}/{images.length}
            </div>
            <button className={styles.nextButton} onClick={goToNextImage}>
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;
