import React, { useState } from "react";
// import NewsCard from '../../components/newsCard/NewsCard';
import NewsCard from "./../../components/newsCard/NewsCard";
import Banner from "../../components/banner/banner";
import { data } from "./testingData";
import Pagination from "./pagination";

function News(props) {
  const [currentPage, setCurrentPage] = useState(2);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <div>
        <Banner title="ORGANIC INFORMATION" pageName="NEWS ARTICLE" />
      </div>

      <NewsCard data={currentPost} link={'/singleNews'}/>
      <div className="text-center -mt-16 my-10 space-x-3 ">
        <Pagination
          totalPost={data.length}
          setCurrentPage={setCurrentPage}
          postPerPage={postPerPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default News;
