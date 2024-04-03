import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_SINGLE_BOOKS } from "../apollo";
import { useEffect, useState } from "react";

export const SingleProduct = () => {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState(null);

  const { data } = useQuery(GET_SINGLE_BOOKS, {
    variables: {
      booksId: id,
    },
  });

  useEffect(() => {
    if (data && data.books && data.books.length > 0) {
      setSingleProductData(data.books[0]);
    }
  }, [data]);

  return (
    <div className="container">
      <div className="mt-10 w-full h-full flex justify-center">
        {singleProductData && (
          <div className="flex justify-between items-center gap-10">
            <div className="w-[500px]">
              <img src="https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/books/@@images/image.jpeg" alt="" />
            </div>
            <div>
              <h3 className="text-3xl text-[#282c34] mb-4">
                {singleProductData.title}
              </h3>
              <p className="h-[2px] w-full bg-[#a0a0a0]" />
              <p className="text-xl mt-3 font-medium text-black">
                Author:
                <span className="pl-4 text-[#282c34] italic font-[400]">
                  {singleProductData.author}
                </span>
              </p>
              <p className="mt-5 max-w-[900px] text-lg text-[#282c34] leading-8">
                <span className="font-medium text-xl text-black">
                  Description :
                </span>{" "}
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
              <p className="mt-5 text-lg text-[#282c34] leading-8">
                <span className="font-medium pr-5 text-xl text-black">
                  Price:
                </span>
                {singleProductData.price}$
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
