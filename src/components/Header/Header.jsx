import s from './Header.module.css';

const Header = () => {
    return (<header className={s.header}>
        <div>
            <h1>SHREKBOOK</h1>
            <img src="https://www.nicepng.com/png/full/957-9572578_shrek-s.png" >
            </img>
        </div>
    </header>)

}

export default Header;