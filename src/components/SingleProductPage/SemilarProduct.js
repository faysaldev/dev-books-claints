import React from "react";
import { useSelector } from "react-redux";
import { addAllProduct } from "../../features/appSlice";
import SingleCard from "../homeSngleCard/SingleCard";
function SemilarProduct({ category, _id }) {
  const allP = useSelector((state) => state.app.allProduct);

  const likeProduct = allP.filter(
    (product) =>
      product.category.toLowerCase().replace(/\s/g, "") ==
      category.toLowerCase().replace(/\s/g, "")
  );
  const filteranotherTime = likeProduct.filter((product) => product._id != _id);

  return (
    <div className="max-w-7xl mx-auto pl-10">
      <h1 className="text-2xl font-semibold pb-6">You might also like's</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm: gap-x-5">
        {filteranotherTime?.map(
          ({
            _id,
            image,
            price,
            title,
            details,
            category,
            username,
            userImg,
            createdAt,
            updatedAt,
          }) => (
            <SingleCard
              _id={_id}
              title={title}
              price={price}
              category={category}
              details={details}
              image={image}
              username={username}
              userImg={userImg}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SemilarProduct;
