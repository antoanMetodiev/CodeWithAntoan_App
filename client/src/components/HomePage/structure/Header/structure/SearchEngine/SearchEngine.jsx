import style from "./SearchEngine.module.css";
import axios from "axios";

const SearchEngine = ({
    setSpecificLecturesHandler
}) => {

    async function searchLecturesHandler(event) {
        event.preventDefault();
        const wantedLectures = event.target.searchEngine.value;

        if (wantedLectures.length == 0) return;

        try {
            const response = await axios.post("http://localhost:3333/search-lectures", { wantedLectures: wantedLectures });
            console.log(response.data.serviceResponse);
            setSpecificLecturesHandler(response.data.serviceResponse);
        } catch (error) {
            console.log("We have a problem with POST REQUEST FOR LECTURES....");
        }
    }

    return (
        <form onSubmit={searchLecturesHandler} className={style['search-engine-wrapper']}>
            <input name="searchEngine" className={style['search-engine']} type="text" placeholder="Търси Лекция.." />
        </form>
    );
}

export default SearchEngine;