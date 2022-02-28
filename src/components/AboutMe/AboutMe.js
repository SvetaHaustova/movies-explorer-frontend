import "./AboutMe.css";
import about_me_foto from "../../images/about_me_foto.JPG";

function AboutMe() {
    return (
        <section className="about-me section">
            <h2 className="about-project__title section__title">Студент</h2>
            <div className="about-me__info">
                <div className="about-me__description">
                    <p className="about-me__name">Светлана</p>
                    <p className="about-me__profession">Фронтенд-разработчик, 33 года</p>
                    <p className="about-me__text">
                        Закончила курсы по веб-разработке в Яндекс.Практикуме, сейчас прохожу курс на React-разработчика. 
                        Работала сначала в системе менеджмента качества, потом в бизнес-аналитике. В какой-то момент решила 
                        попробовать свои силы в веб-разработке, и мне очень понравилось. Хочу и дальше развиваться в данном направлении.
                    </p>
                    <ul className="about-me__list">
                        <li>
                            <a className="about-me__link" href="https://t.me/svetllanasi" target="_blank" rel="noreferrer">Telegram</a>
                        </li>
                        <li>
                            <a className="about-me__link" href="https://github.com/svetlanassi" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                <img className="about-me__foto" src={about_me_foto} alt="Аватар" />
            </div>
        </section>
    );
}

export default AboutMe;