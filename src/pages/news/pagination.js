import React from "react";
import { Link } from "react-router-dom";

function Pagination({ totalPost, postPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((item, i) => {
        return (
            
          <Link
            className={`${item==currentPage?'bg-primary': 'bg-lightWhite'} text-lightColor font-bold no-underline mr-3 bg-lightWhite p-4 rounded-full` }
            key={i}
            onClick={() => setCurrentPage(item) }

            
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}

export default Pagination;
