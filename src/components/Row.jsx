import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ fetchURL, title, rowId }) => {
  const [movies, setMovies] = useState([]);

  const sliderRef = useRef(null);

  const slider = (step) => {
    sliderRef.current.scrollLeft += step;
  };

  // const sliderRight = (step) => {
  //   sliderRef.current.scrollRight += step;
  //   console.log("right");
  // };

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slider(-500)}
          size={40}
          className="left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          // id={"slider"}
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap relative scroll-smooth scrollbar-hide"
        >
          {movies.map((item) => (
            <Movie item={item} key={item.id} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slider(500)}
          size={40}
          className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
