import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import search_icon from "../../images/search-icon.svg";

function SearchForm() {
    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" name="search">
                    <input className="search__input" type="text" name="search" placeholder="Фильм" />
                    <button className="search__button" type="submit">
                        <img className="search__button-icon" src={search_icon} alt="Поиск" />
                    </button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm;