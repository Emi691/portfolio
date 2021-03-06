import './side.scss'

export default function side({active, setActive}) {
    return (
        <div className={`side + ${active === true ? 'active' : ''}`} id='side'>
            <ul>
                <li>
                    <a href='#intro'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#works'>Works</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    );
}
