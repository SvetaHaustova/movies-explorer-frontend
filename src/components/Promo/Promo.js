import "./Promo.css";
import promo_logo from "../../images/logo/landing-logo.svg";

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__logo" src={promo_logo} alt="Логотип"/>
        </section>
    );
}

export default Promo;