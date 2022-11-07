import React, {Fragment, useState} from "react";
import axios from "axios";


function ResumeUpload() {
    const[file, setFile] = useState('');
    const[fileName, setFileName] = useState('Choose File');
    const[uploadedfile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData =new FormData();
        formData.append('file', file)

        try {
    const res = await axios.post('/upload', formData, {
    headers: {
        'Content-Type': 'mulitpart/form-data'
    }
    });

    const { fileName, filePath} = res.data;

    setUploadedFile({ fileName, filePath})
        }catch(err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
              } else {
                console.log('err in submit', err.response.data.msg);
              }
        }
    };

  return (
    <div className='container mt-4'>
      <h3 className="display-4 text-center mb-4">upload here</h3>
        <Fragment>
            <form onSubmit={onSubmit}>
            <div className="mb-3">
  <label htmlFor="formFile" className="form-label">{fileName}</label>
  <input className="form-control" type="file" id="formFile" onChange={onChange} />
            </div>
            <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4 mb-4" />
            </form>
        </Fragment>
      
    </div>
  );
}

export default ResumeUpload;