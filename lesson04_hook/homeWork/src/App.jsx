import useFetch from "react-fetch-hook";

import Card from "./components/Card" ;
import { useState } from "react";

import './style.css'

export default function App() {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
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

    const newRick = data?.results.filter((item) => item.name.toLowerCase().includes(searchName.toLowerCase())).map((item) => (
      <Card item={item} />
      
      // <div className="characters" key={item.id}>
      //   <li>
      //     <img src={item.image} />
      //     {item.name} {item.gender}
      //   </li>
      // </div>
    ));

  return (
    <>
    <h2>RICK AND MORTY</h2>
      <input type="text" placeholder="search by name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
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