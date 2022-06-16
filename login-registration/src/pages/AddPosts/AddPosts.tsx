import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { createPost } from "../../redux/reducers/postReducer";
import "./AddPosts.css";
import { FileUploader } from "react-drag-drop-files";

const AddPosts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lessonNum, setLessonNum] = useState(0);
  const [image, setImage] = useState("");

  const fileTypes = ["JPG", "JPEG", "PNG", "SVG"];

  const onChangeImage = (info: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(info);
    reader.onload = function () {
      const dataUrl = reader.result;
      if (dataUrl && typeof dataUrl === "string") {
        const base64 = dataUrl.split(",")[1];
        setImage(base64);
      }
    };
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    const postData = {
      title,
      text,
      lesson_num: lessonNum,
      image,
    };
    dispatch(createPost(postData));
    console.log(postData);
    setTitle("");
    setText("");
    setLessonNum(0);
    setImage("");
  };

  return (
    <div className="addPosts">
      <div className="addPosts__container _container">
        <h1 className="addPosts__title">Add your new post!</h1>
        <form onSubmit={onSubmitForm} className="addPosts__form">
          <div className="addPosts__form__item">
            <label>
              Title
              <Input
                className="addPosts__form__input"
                onChange={(event: any) => setTitle(event.target.value)}
                value={title}
                placeholder={"Enter your title"}
                type={"text"}
              ></Input>
            </label>
          </div>
          <div className="addPosts__form__item">
            <label>
              Text
              <textarea
                className="addPosts__form__textarea"
                onChange={(event: any) => setText(event.target.value)}
                value={text}
                placeholder={"Enter your text"}
              ></textarea>
            </label>
          </div>
          <div className="addPosts__form__item">
            <label>
              Lesson
              <Input
                className="addPosts__form__input"
                onChange={(event: any) => setLessonNum(event.target.value)}
                value={lessonNum}
                placeholder={"Enter number of lesson"}
                type={"number"}
              ></Input>
            </label>
          </div>
          <div className="addPosts__form__item">
            <label>
              Image
              <FileUploader handleChange={onChangeImage} name="file" types={fileTypes}>
                {image ? (
                  <img src={`data:image/jpeg;base64, ${image}`} className="addPosts__form__image" alt="product" />
                ) : (
                  <div className="dragAndDrop">{"Drag & drop or browse file"}</div>
                )}
              </FileUploader>
            </label>
          </div>
          <Button className="default-button addPost" text="Add new post"></Button>
        </form>
      </div>
    </div>
  );
};

export default AddPosts;
