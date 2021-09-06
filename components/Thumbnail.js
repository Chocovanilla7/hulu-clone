import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ movie }, ref) => {
  const baseURL = "https:image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="group p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        className=""
        layout="responsive"
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-lg">{movie.overview}</p>
        <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.release_date || movie.first_air_date} <ThumbUpIcon className="h-5 mx-2" />{" "}
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
