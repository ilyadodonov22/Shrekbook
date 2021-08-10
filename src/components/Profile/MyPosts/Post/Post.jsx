import s from './Post.module.css'


const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/06/78/67/06786754c48040f12df599d0ed6aaa61.png" className={s.postImg} />
            {props.message}
            <button>like</button>
            {props.likesCount}
        </div>

    )
}

export default Post;