import { createContext, useContext, useState } from 'react';

const GalleryContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};

export const GalleryProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images, index = 0) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  return (
    <GalleryContext.Provider
      value={{
        isModalOpen,
        currentImages,
        currentIndex,
        openGallery,
        closeGallery,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

