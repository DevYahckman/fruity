import React, { useEffect, useState } from "react";
import NewsCard from "./../../components/newsCard/NewsCard";
import Banner from "../../components/banner/banner";
import config from "../../config.json";
import http from "../../services/httpService";
import Pagination from "../../utils/pagination";

function News(props) {
  const [currentPage, setCurrentPage] = useState(2);
  const [postPerPage, setPostPerPage] = useState(6);
  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      const { data } = await http.get(`${config.apiUrl}/news`);
      setNews(data);
      setIsFetching(false);
    }
    getData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = news.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <div>
        <Banner title="ORGANIC INFORMATION" pageName="NEWS ARTICLE" />
      </div>

      {isFetching && "please wait..."}
      <NewsCard data={currentPost} />
      <div className="text-center md:-mt-6 lg:-mt-16 my-10 space-x-3 ">
        <Pagination
          totalPost={news.length}
          setCurrentPage={setCurrentPage}
          postPerPage={postPerPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default News;
