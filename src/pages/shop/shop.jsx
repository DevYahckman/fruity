import React, { useState } from "react";
import Banner from "../../components/banner/banner";
import Goods from "./goods";
import { products } from "./data";
import Pagination from './../../utils/pagination';

function Shop(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage

  const currentPost = products.slice(firstPostIndex,lastPostIndex)
  return (
    <div>
      <div>
        <Banner pageName={"SHOP"} title={"FRESH AND ORGANIC"} />
      </div>

      <div>
        <Goods products={currentPost}  />
        <div className="text-center mt-16 my-10 space-x-3 ">
        <Pagination
          totalPost={products.length}
          setCurrentPage={setCurrentPage}
          postPerPage={postPerPage}
          currentPage={currentPage}
        />

      </div>

      </div>
    </div>
  );
}

export default Shop;
