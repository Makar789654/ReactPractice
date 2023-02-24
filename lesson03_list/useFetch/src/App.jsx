import useFetch from "react-fetch-hook";
import './style.css'
import { useState } from "react";


export default function App() {
  const [page, setPage] = useState(1);
  const { isLoading, data, error } = useFetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );

  if (error) {
    console.log(error);
  }

  const handleClickNext = () => {
    setPage(page + 1);
  };

  const handleClickPrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const newRick =
    data?.results.map((item) => (
      <div className="characters" key={item.id}>
        <li>
          <img src={item.image} />
          {item.name} {item.gender}
        </li>
      </div>
    ));

  return (
    <>
      <ul>{newRick}</ul>
      <button className="previous-page" onClick={handleClickPrevious}>
        Previous page
      </button>
      <button className="next-page" onClick={handleClickNext}>
        Next page
      </button>
      {isLoading && <div>...Loading</div>}
    </>
  );
}