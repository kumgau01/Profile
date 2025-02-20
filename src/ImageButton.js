import React from "react";

const ImageButton = ({ imageUrl, link, altText }) => {
  const handleClick = () => {
    window.open(link, "_blank"); // Opens link in a new tab
  };

  return (
    <div className="flex-container">
      <img
        src={imageUrl}
        alt={altText}
        className="image-button"
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageButton;
