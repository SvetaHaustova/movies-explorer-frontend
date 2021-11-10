import "./PageNotFound.css";

function PageNotFound({ history }) {
    
    function handleGoBack() {
        history.goBack();
    }

    return (
        <main>
            <section className="page-not-found">
                <p className="page-not-found__number">404</p>
                <p className="page-not-found__text">Страница не найдена</p>
                <button className="page-not-found__button" type="button" onClick={handleGoBack}>Назад</button>
            </section>
        </main>
    );
}

export default PageNotFound;