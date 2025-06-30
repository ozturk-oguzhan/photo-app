import React from "react";
import "./CreatePage.css";
const CreatePage = () => {
  return (
    <div className="create-page">
      <div className="create-top">
        <h4>Create Pin</h4>
        <button className="publish-btn"> Publish</button>
      </div>
      <div className="create-post">
        <div className="upload">
          <div className="upload-title">
            <img src="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="upload-info">
            We recommend using high quality .jpg files less than 200 MB
          </div>
        </div>
        <div className="post-form">
          <div className="form-item">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Title" name="title" id="title" />
          </div>
          <div className="form-item">
            <label htmlFor="desc">Description</label>
            <textarea
              rows={6}
              placeholder="Add a detailed description"
              name="desc"
              id="desc"
            />
          </div>
          <div className="form-item">
            <label htmlFor="link">Link</label>
            <input type="text" placeholder="Add a link" name="link" id="link" />
          </div>
          <div className="form-item">
            <label htmlFor="link">Board</label>
            <select name="board" id="board">
              <option>Choose a board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="tag">Taged topics</label>
            <input type="text" placeholder="Add a tag" name="tag" id="tag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
