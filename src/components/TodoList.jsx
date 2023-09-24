import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { useState } from "react";

export default function TodoList({
  id,
  task,
  completed,
  onEditTodo,
  onDeleteTodo,
  onCompletedTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  const onEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEditing = (e) => {
    e.preventDefault();

    if (!value) return;

    onEditTodo(id, value);
    setIsEditing(!isEditing);
    setValue("");
  };

  return (
    <>
      {isEditing ? (
        <div className="border-2 px-4 py-4 rounded-md">
          <div className="flex items-center">
            <div className="w-full">
              <form action="" onSubmit={handleSaveEditing}>
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 md:space-y-0">
                  <input
                    type="text"
                    value={value}
                    placeholder={task}
                    onChange={(e) => setValue(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-sm"
                  />
                  <button className="font-semibold w-full sm:w-[20%] text-white py-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-cyan-300 rounded-md">
                    Save
                  </button>
                  <button
                    className="font-semibold w-full sm:w-[20%] text-white py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 focus:bg-red-300 rounded-md"
                    onClick={onEditing}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center border-2 px-6 py-4 rounded-md">
          <p
            className={`md:font-lighter md:text-lg ${
              completed && "line-through text-red-500"
            }`}
          >
            {task}
          </p>
          <div className="flex gap-3">
            <button onClick={() => onCompletedTodo(id)}>
              {completed ? (
                <MdOutlineCheckBox className="text-blue-700 w-[20px] h-[20px]" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank className="text-slate-500 w-[20px] h-[20px]" />
              )}
            </button>
            <button
              className="text-black-500 w-[20px] h-[20px]"
              onClick={onEditing}
            >
              <BiSolidPencil />
            </button>
            <button
              className="text-red-500 w-[20px] h-[20px]"
              onClick={() => onDeleteTodo(id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
