import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.img} src="https://i.pinimg.com/originals/b8/b4/42/b8b4420dd68c851aeb730c5e35177c47.jpg"></img>
            </div>
            <div className={s.ava_disc}>
                <div><img className={s.avatar} src="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/1/83/756079611261831.jpg"></img></div>
                <div className={s.discription}>
                    <h2>SHREK</h2>
                    <p>Home: his swamp</p>
                    <p>Education: Proffessional OGRE</p>
                    <p>Web Site: SHREKBOOK.COM</p>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;