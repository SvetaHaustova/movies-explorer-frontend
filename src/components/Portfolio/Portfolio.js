import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/svetlanassi/how-to-learn" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <p className="portfolio__link-text">&#8599;</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a  className="portfolio__link" href="https://svetlanassi.github.io/russian-travel/" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <p className="portfolio__link-text">&#8599;</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a  className="portfolio__link" href="https://sightsofrussia.nomoredomains.monster/sign-in" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <p className="portfolio__link-text">&#8599;</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;