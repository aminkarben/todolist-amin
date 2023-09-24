export default function TodoFilter({ onFilteredTodo }) {
  return (
    <div className="my-8">
      <h2 className="text-center font-bold text-4xl mb-5">TodoList</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-10">
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-cyan-400"
          value={"all"}
          onClick={(e) => onFilteredTodo(e)}
        >
          All
        </button>
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-cyan-400"
          value={"done"}
          onClick={(e) => onFilteredTodo(e)}
        >
          Done
        </button>
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-cyan-400"
          value={"active"}
          onClick={(e) => onFilteredTodo(e)}
        >
          Todo
        </button>
      </div>
    </div>
  );
}
