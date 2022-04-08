import React, { useState } from "react";

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  //   alert(reader);
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      <img src={preview} alt="preview" height="200px" width="200px" />
    </div>
  );
};

export default PreviewImage;
