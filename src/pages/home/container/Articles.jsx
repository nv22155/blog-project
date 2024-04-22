import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import ArticleCard from "../../../components/ArticleCard";
import { changeCount } from "../../../store/actions/countActions";

const Articles = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const countChangeHandler = (type) => {
    dispatch(changeCount(type));
  };

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {/* Render the ArticleCard components */}
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <button className="flex items-center gap-x-1 text-blue-500">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
      <div className="mt-2 flex items-center gap-x-5">
        <button onClick={() => countChangeHandler('DECREASE')}>decrease</button>
        <span>{count}</span>
        <button onClick={() => countChangeHandler('INCREASE')}>increase</button>
      </div>
    </section>
  );
};

export default Articles;