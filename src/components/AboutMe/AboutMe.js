import "./AboutMe.css";
import about_me_foto from "../../images/about_me_foto.JPG";

function AboutMe() {
    return (
        <section className="about-me section">
            <h2 className="about-project__title section__title">Студент</h2>
            <div className="about-me__info">
                <div className="about-me__description">
                    <p className="about-me__name">Светлана</p>
                    <p className="about-me__profession">Фронтенд-разработчик, 32 года</p>
                    <p className="about-me__text">Информация обо мне</p>
                    <ul className="about-me__list">
                        <li>
                            <a className="about-me__link" href="https://telegram.org" target="_blank" rel="noreferrer">Telegram</a>
                        </li>
                        <li>
                            <a className="about-me__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                <img className="about-me__foto" src={about_me_foto} alt="Аватар" />
            </div>
        </section>
    );
}

export default AboutMe;