import React, {Fragment, useState} from "react";


function ResumeUpload() {


  return (
    <div className="container">
      <form autoComplete="off" action="/sendemail" method="POST" enctype="multipart/form-data">
      <div className="form-group">
        <input className="form-control" type="text" name="name" placeholder="First and Last Name" />
        <input className="form-control" type="email" name="yours" placeholder="Your Email" />
        <input className="form-control" type="text" name="position" placeholder="Role" />
        <label for="attachment">Attachment</label>
        <input className="form-control" type="file" name="image"></input>
          <button class="btn btn-block btn-primary">Send Resume</button>
      </div>
      </form>
    {/* <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment> */}
    </div>
  );
};

export default ResumeUpload;