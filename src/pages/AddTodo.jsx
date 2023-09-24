import { useState } from "react";
import Layout from "../layouts/Layout";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link, Form } from "react-router-dom";

export default function AddTodo({ onAddTodo }) {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    onAddTodo(value);
    navigate("/");
  };

  return (
    <Layout>
      <div className="mt-12">
        <h2 className="font-bold text-4xl text-center">TodoInput</h2>
        <div className="border-2 px-6 py-8 rounded-md">
          <Form action="/" method="POST" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <div className="flex rounded-md w-full justify-between">
                <FaBook className="rounded-l-md bg-cyan-500 text-white w-[48px] h-[48px] p-3" />
                <input
                  type="text"
                  placeholder="Input Todo"
                  onChange={(e) => setValue(e.target.value)}
                  className="border-y-2 border-r-2 rounded-r-md w-full py-2 px-4 outline-slate-500"
                />
              </div>
              <button className="font-semibold text-white py-2 rounded-md bg-cyan-500 hover:bg-cyan-500 active:bg-cyan-700 focus:bg-cyan-400">
                Submit
              </button>
              <Link
                className="inline-block text-center font-semibold rounded-md text-white w-full bg-red-500 hover:bg-red-600 active:bg-red-700 px-8 py-2"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
