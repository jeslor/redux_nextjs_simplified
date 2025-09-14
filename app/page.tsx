"use client";

import { decremented, incremented } from "@/features/counter-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const page = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const increment = () => {
    dispatch(incremented());
  };
  const decrement = () => {
    dispatch(decremented());
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="max-w-[600px] w-full p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Redux Toolkit Counter Example
          </h1>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 transition"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 transition"
          >
            Decrement
          </button>
        </div>
        <div className="mt-6 text-center">
          <span className="text-xl font-semibold text-gray-700">
            Count: {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
