import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import Goods from "./goods";
// import { products } from "./data";
import Pagination from './../../utils/pagination';
import http from '../../services/httpService'
import config from '../../config.json'


function Shop(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
const [products, setProducts] = useState([])
const [selectedCategory,setSelectedCategory] = useState('All')

  useEffect(()=>{
    async function getData(){
const {data} =await http.get(`${config.apiUrl}/fruits`)
setProducts(data);
// console.log(data.map(item=>item.category.name));
    }
    getData()
  },[])

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage
  const filterProducts = selectedCategory === 'All'?
  products:products.filter(p=>p.category.name===selectedCategory)


  const currentPost = filterProducts.slice(firstPostIndex,lastPostIndex)
  return (
    <div>
      <div>
        <Banner pageName={"SHOP"} title={"FRESH AND ORGANIC"} />
      </div>

      <div>
        <Goods products={currentPost} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        {selectedCategory==='All' &&(

        <div className="text-center mt-16 my-10 space-x-3 ">
        <Pagination
          totalPost={products.length}
          setCurrentPage={setCurrentPage}
          postPerPage={postPerPage}
          currentPage={currentPage}
        />

      </div>
        )}

      </div>
    </div>
  );
}

export default Shop;
