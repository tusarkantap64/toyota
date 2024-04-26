import React, { useState, ChangeEvent } from 'react';
import './FileUploader.css';

interface FileUploaderProps {
  heading: string;
}

const FileUploader: React.FC<FileUploaderProps> = (props) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleFileRemove = (fileName: string) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  return (
    <div className="wrapper">
      <div className="box">
        <div className="input-bx">
          <div className="uploadlabel-heading">{`${props.heading}*`}</div>
          <div className="uploadlabel">
            <label htmlFor="upload">
              <span><i className="fa fa-cloud-upload"></i></span>
              <p>Drag and drop files here or</p><a type="file" id="upload" accept=".pdf,.jpeg,.png" onChange={handleFileChange}>Choose file</a>
            </label>
            <input type="file" id="upload" accept=".pdf,.jpeg,.png" onChange={handleFileChange} />
          </div>
        </div>
        <div id="filewrapper">
          {files.map((file, index) => (
            <div className="showfilebox" key={index}>
              <div className="left">
                <i className="fa fa-check-circle"></i>
                <h3>{file.name}</h3>
                <h4>({`${Math.floor(file.size / 1024)}kb`})</h4>
              </div>
              <div className="right" onClick={() => handleFileRemove(file.name)}>
                <i className="material-icons delete">delete</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
