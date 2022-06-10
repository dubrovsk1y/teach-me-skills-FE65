import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { createPost } from "../../redux/reducers/postReducer";
import "./AddPosts.css";

const AddPosts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lessonNum, setLessonNum] = useState("");
  const [image, setImage] = useState("");

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    const postData = {
      title,
      text,
      lesson_num: +lessonNum,
      image,
    };
    dispatch(createPost(postData));
    console.log(postData);
    setTitle("");
    setText("");
    setLessonNum("");
    setImage("");
  };

  return (
    <div className="addPosts">
      <div className="addPosts__container _container">
        <h1 className="addPosts__title">Add your new post!</h1>
        <form onSubmit={onSubmitForm} className="addPosts__form">
          <div>
            <label>
              Title
              <Input
                className=""
                onChange={(event: any) => setTitle(event.target.value)}
                value={title}
                placeholder={"Title"}
                type={"text"}
                id={"title"}
              ></Input>
            </label>
          </div>
          <div>
            <label>
              Text
              <Input
                className=""
                onChange={(event: any) => setText(event.target.value)}
                value={text}
                placeholder={"Text"}
                type={"text"}
                id={"text"}
              ></Input>
            </label>
          </div>
          <div>
            <label>
              Lesson
              <Input
                className=""
                onChange={(event: any) => setLessonNum(event.target.value)}
                value={lessonNum}
                placeholder={"Lesson_num"}
                type={"text"}
                id={"lesson_num"}
              ></Input>
            </label>
          </div>
          <div>
            <label>
              Image
              <Input
                className=""
                onChange={(event: any) => setImage(event.target.value)}
                value={image}
                placeholder={"Enter your title"}
                type={"file"}
                id={"Image"}
              ></Input>
            </label>
          </div>
          <Button className="default-button addPost" text="Add new post"></Button>
        </form>
      </div>
    </div>
  );
};

export default AddPosts;
