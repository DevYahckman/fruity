import React from "react";
import img from "../../assets/avatar1.png";

function Comments(props) {
  return (
    <div className="mt-10">
      <p className="text-4xl font-semibold">3 comments</p>

      <div className="flex">
        <div>
          <img
            src={img}
            className="mt-5 mr-5"
            width="50px"
            height="50px"
            style={{ borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl font-semibold">Bella John</p>
          <p className="text-sm text-lightColor">
            Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus
            sem magna, maximus at est id, maximus aliquet nunc. Suspendisse
            lacinia velit a eros porttitor, in interdum ante faucibus
            Suspendisse lacinia velit a eros porttitor, in interdum ante
            faucibus
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
