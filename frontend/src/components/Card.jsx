import { Link } from "react-router-dom";

export const Card = ({ id, title, author, price }) => (
  <Link to={`/${id}`}>
    <div className="p-3 w-[300px]">
      <div className="border-2 bg-yellow-500 px-4 py-6 h-[300px] rounded-lg transform transition duration-500 hover:scale-110">
        <div className="h-[150px] rounded-lg">
          <img src="https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/books/@@images/image.jpeg" alt="" />
        </div>
        <hr className="border-1 mt-5" />
        <h3 className="text-md mb-1 mt-2">{title}</h3>
        <p className="mb-1 italic font-mono">{author}</p>
        <p className="">{price}$</p>
      </div>
    </div>
  </Link>
);
