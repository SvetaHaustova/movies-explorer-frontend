import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import search_icon from "../../images/search-icon.svg";
import useFormValidation from "../../hooks/useFormValidation";
import { ENTER_KEYWORD } from "../../utils/constants.js";

function SearchForm({ onSearchMovies, checked, onChangeСheckbox }) {
    const [errorText, setErrorText] = React.useState("");
    const { values, isValid, handleChange } = useFormValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            onSearchMovies(values.search);
        } else {
            setErrorText(ENTER_KEYWORD);
        }
    }
    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" name="search" onSubmit={handleSubmit} noValidate>
                    <input className="search__input" 
                        type="text" 
                        name="search" 
                        placeholder="Фильм"
                        value={values.search || ""}
                        onChange={handleChange}
                        required
                    />
                    <span className="search__input-error">{isValid && values.search ? "" : `${errorText}`}</span>
                    <button className="search__button" type="submit">
                        <img className="search__button-icon" src={search_icon} alt="Поиск" />
                    </button>
                </form>
                <FilterCheckbox
                    checked={checked}
                    onChangeСheckbox={onChangeСheckbox}
                />
            </div>
        </section>
    );
}

export default SearchForm;