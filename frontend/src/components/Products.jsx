import { useQuery } from "@apollo/client";
import { Card } from "./Card";
import { BOOKS_BY_CATEGORY, GET_BOOKS, SEARCH } from "./../apollo/index";
import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { CATEGORIES } from "./constants";

export const Products = () => {
  const [inputValue, setInputValue] = useState("");
  const [booksData, setBooksData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);

  const { data: booksQueryData } = useQuery(GET_BOOKS);
  const { data: searchQueryData } = useQuery(SEARCH, {
    variables: {
      value: inputValue,
    },
  });
  const { data: booksByCategoryQueryData } = useQuery(BOOKS_BY_CATEGORY, {
    variables: { categories: selectedCategories },
  });

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    if (booksByCategoryQueryData && booksByCategoryQueryData.booksByCategory) {
      setBooksData(booksByCategoryQueryData.booksByCategory);
    }
  }, [booksByCategoryQueryData]);

  useEffect(() => {
    if (booksQueryData && booksQueryData.books) {
      setBooksData(booksQueryData.books);
    }
  }, [booksQueryData]);

  useEffect(() => {
    if (searchQueryData && searchQueryData.search) {
      setBooksData(searchQueryData.search);
    }
  }, [searchQueryData]);

  return (
    <div>
      <div className="relative container mt-10 flex justify-center">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="p-3 pl-5 text-xl text-black border border-gray-200 w-[400px] outline-none rounded"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <div className="absolute top-1 left-[890px] mt-3">
          <GrSearch className="text-2xl text-gray-600" />
        </div>
      </div>

      <div className="container pt-10 flex justify-between items-start">
        <div>
          <h2 className="text-3xl text-gray-800 py-2">Filters</h2>
          <hr className="border-1 pb-5" />
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className=" ml-4 flex items-start space-x-3 py-4 cursor-pointer p-2 rounded-lg w-[300px] !hover:text-white hover:bg-blue-700"
            >
              <input
                type="checkbox"
                className="border-gray-300 rounded h-5 w-5 cursor-pointer"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              <div className="flex flex-col hover:text-white">
                <h4 className="text-black font-medium leading-none">
                  {category}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-7 items-center">
          {booksData.map(({ id, title, author, price }) => (
            <Card
              id={id}
              key={id}
              title={title}
              author={author}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
