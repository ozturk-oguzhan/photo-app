import React, { useEffect, useState } from "react";
import "./CreatePage.css";
import { useCreatePostMutation } from "../../utils/fetchPins";
const CreatePage = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [createPost] = useCreatePostMutation();
  async function onSubmitPost() {
    const formData = new FormData();
    formData.append("photo", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("width", imageDimensions.width);
    formData.append("height", imageDimensions.height);

    try {
      const res = await createPost(formData).unwrap();
      if (res) {
        setFile();
        setTitle();
        setDescription();
        setImageDimensions();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (file) {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.src = URL.createObjectURL(file);
    }
  }, [file]);
  return (
    <div className="create-page">
      <div className="create-top">
        <h4>Create Pin</h4>
        <button className="publish-btn" onClick={onSubmitPost}>
          {" "}
          Publish
        </button>
      </div>
      <div className="create-post">
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
          id="upload"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="upload">
          <div className="upload">
            {file ? (
              <img
                className="uploaded-file"
                src={URL.createObjectURL(file)}
              ></img>
            ) : (
              <>
                <div className="upload-title">
                  <img src="/general/upload.svg" alt="" />
                  <span>Choose a file</span>
                </div>
                <div className="upload-info">
                  We recommend using high quality .jpg files less than 200 MB
                </div>
              </>
            )}
          </div>
        </label>
        <div className="post-form">
          <div className="form-item">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="desc">Description</label>
            <textarea
              rows={6}
              placeholder="Add a detailed description"
              name="desc"
              id="desc"
              onChange={(e) => setDescription(e.target.value)}
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
