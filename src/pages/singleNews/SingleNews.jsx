import React from "react";
import Banner from "../../components/banner/banner";
import bg from "../../assets/news-bg-3.jpg";
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import Comments from "./comments";
import CommentForm from "./commentForm";

function SingleNews(props) {
  return (
    <div>
      <div>
        <Banner title="READ THE DETAILS" pageName="Single Article" />
      </div>
      <div className="p-5 md:p-20">
        <div
          className=" gap-4 grid grid-cols-1 lg:grid-cols-3 h-auto"
          style={{ height: "auto" }}
        >
          <div className="col-span-2">
            <div
              // style={{ backgroundImage: `url(${bg})` }}
              className="w-full  bg-no-repeat bg-cover bg-center rounded-xl"
            >
              <img src={bg} className=" w-full h-full rounded-xl" alt="" />
            </div>
            <p className="text-sm text-lightColor  ">
              <span className="mr-3">
                {" "}
                <FaUser /> Admin{" "}
              </span>
              <span>
                {" "}
                <BsCalendar2DateFill className="mr-1" />
                27 December 2023
              </span>
            </p>

            <p className="text-4xl font-bold">
              Pomegranate can prevent heart disease
            </p>
            <p className="text-base font-light ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              soluta, similique quidem fuga vel voluptates amet doloremque
              corrupti. Perferendis totam voluptates eius error fuga cupiditate
              dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum
              perferendis, nobis hic adipisci vel inventore facilis rem illo,
              tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium
              quidem recusandae expedita dicta cum eum. Quae laborum repellat a
              ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!
            </p>
            <p className="text-base font-light ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              soluta, similique quidem fuga vel voluptates amet doloremque
              corrupti. Perferendis totam voluptates eius error fuga cupiditate
              dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum
              perferendis, nobis hic adipisci vel inventore facilis rem illo,
              tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium
              quidem recusandae expedita dicta cum eum. Quae laborum repellat a
              ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!
            </p>
            <p className="text-base font-light ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              soluta, similique quidem fuga vel voluptates amet doloremque
              corrupti. Perferendis totam voluptates eius error fuga cupiditate
              dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum
              perferendis, nobis hic adipisci vel inventore facilis rem illo,
              tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium
              quidem recusandae expedita dicta cum eum. Quae laborum repellat a
              ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!
            </p>
            <Comments />
            <CommentForm />
          </div>

          <div className="hidden lg:inline-block">advertize here</div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
