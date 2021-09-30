// Fichero src/components/ImageReader.js
import { useRef, useState } from 'react';

const ImageReader = (props) => {
  const [fileSize, setFileSize] = useState(0);
  const [fileType, setFileType] = useState('desconocida');

  const fileElement = useRef();

  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = fileElement.current.files[0];

    if (selectedFile) {
      console.log(selectedFile);

      setFileSize(selectedFile.size);
      setFileType(selectedFile.type);
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const getImage = () => {
    props.handleImage(fileReader.result);
  };

  fileReader.addEventListener('load', getImage);

  return (
    <div>
      <label>
        <input
          className='fill__photo--hiddenField'
          ref={fileElement}
          type='file'
          name='image-reader'
          onChange={handleFile}
        />
      </label>
    </div>
  );
};

export default ImageReader;
