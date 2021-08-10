import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import React from 'react'
const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.LikesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <input ref={newPostElement} className={s.input}></input>
                <button onClick={addPost} className={s.button}>Add POST</button>
            </div>
            {postsElements}
        </div >
    )
}

export default MyPosts;