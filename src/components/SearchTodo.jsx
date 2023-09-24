import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchTodo({ onSearchTodo }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearchTodo(keyword);
    setKeyword("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-[85%]">
      <div className="flex flex-col space-y-2 gap-4">
        <div className="flex rounded-md w-full justify-between">
          <FaSearch className="rounded-l-md bg-cyan-500 text-white w-[48px] h-[48px] p-3" />
          <input
            type="text"
            placeholder="Search Todo"
            className="border-y-2 border-r-2 rounded-r-md w-full py-2 px-4 outline-slate-500"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <button className="font-semibold text-white rounded-md bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-500 active:bg-cyan-700 px-8 py-2">
          Search
        </button>
      </div>
    </form>
  );
}
