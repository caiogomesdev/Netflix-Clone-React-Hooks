import './styles.css'

export default ({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://about.netflix.com/images/logo.png" />
                </a>
            </div>

            <div className="header--user">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
        </header>
    )
}