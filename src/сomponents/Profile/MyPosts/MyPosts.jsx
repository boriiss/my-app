import React from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import {
  maxLengthCreator,
  required,
} from "./../../../utils/validators/validators"
import { Textarea } from "./../../common/FormsControls/FormsControls"

const MyPosts = React.memo((props) => {
  console.log("RENDER");

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likesCounts={p.likesCounts} />
  ))

  let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.posts}>
      <h2>My posts</h2>
      <div className={classes.newPost}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div>{postsElements}</div>
    </div>
  )
})

const maxLength10 = maxLengthCreator(10)

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostText"}
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <button>Add post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
)

export default MyPosts
