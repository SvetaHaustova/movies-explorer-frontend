import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project section">
            <h2 className="about-project__title section__title">О проекте</h2>
            <ul className="about-project__list-info">
                <li>
                    <h3 className="about-project__list-info-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__list-info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li>
                    <h3 className="about-project__list-info-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__list-info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className="about-project__list-time">
                <li>
                    <p className="about-project__list-time-week about-project__list-time-week_type_backend">1 неделя</p>
                    <p className="about-project__list-time-description">Back-end</p>
                </li>
                <li>
                    <p className="about-project__list-time-week">4 недели</p>
                    <p className="about-project__list-time-description">Front-end</p>
                </li>
            </ul>
        </section>
    );
}

export default AboutProject;