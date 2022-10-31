import React, { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { async } from "@firebase/util";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const sliderRef = useRef(null);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passID) => {
    try {
      const result = movies.filter((item) => item.id !== passID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const slider = (step) => {
    sliderRef.current.scrollLeft += step;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <div>
      {" "}
      <div>
        <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={() => slider(-500)}
            size={40}
            className="left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
          <div
            ref={sliderRef}
            className="w-full h-full overflow-x-scroll whitespace-nowrap relative scroll-smooth scrollbar-hide"
          >
            {movies.map((item) => (
              <div
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                key={item.id}
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                  <p
                    onClick={() => deleteShow(item.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={() => slider(500)}
            size={40}
            className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
        </div>
      </div>
    </div>
  );
};

export default SavedShows;
