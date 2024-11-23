// ImagePage.js

import React, { useEffect, useState } from 'react';

const ImagePage = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const imageParam = params.get('image');
    setImageURL(imageParam);
  }, []);

  return (
    <div>
      {imageURL && <img src={imageURL} alt="Clicked Image" />}
    </div>
  );
};

export default ImagePage;
