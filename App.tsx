import './App.css';
import React, { useState, ChangeEvent } from 'react';
import FileUploader from './FileUploader.tsx';

const App: React.FC = () => {
  const [image, setImage] = useState<File[]>([]);

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = Array.from(e.target.files);
      setImage([...image, ...newImage]);
      console.log('click');
    }
  };

  return (
    <div className="App">
      <h2 className="upload-area-title">Upload documents to proceed</h2>
      <h4 className="upload-area-subtitle">
        The maximum size for each file must be <b>below 1MB.</b> Supported file formats include: PDF, JPEG, and PNG.
      </h4>
      <div className="fileuploader-component">
        <FileUploader heading={'Vehicle Registration (Mulkiya)'} />
        <FileUploader heading={'Driving License'} />
        <FileUploader heading={'Emirates ID'} />
        <FileUploader heading={'Police Report'} />
      </div>
      <div>
        <i className="material-icons info">info</i>
        <p className="info-guide">
          Document uploading <u>guidelines</u>
        </p>
      </div>
      <div className="image-upload">
        <label htmlFor="upload-image" className="uploadimage">
          <i className="fa fa-camera camera"></i>
          <p className="Upload">Upload Vehicle images (Optional)</p>
        </label>
        <input type="file" id="upload-image" accept=".jpeg,.png" onChange={uploadImage} />
      </div>
    </div>
  );
};

export default App;
