import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const Addtasks = ({ addTask,inputValue ,setinputValue }) => {
  const handleChange = (e) => {
    if (e.target.value)
      {
        setinputValue(e.target.value);
      } 
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter"&& inputValue.trim()) {
      addTask(inputValue);
      setinputValue("");
    }
  };
  const handleClick = (e) => {
    if (inputValue.trim()) {
      addTask(inputValue.trim());
      setinputValue("");
    }
  };
  return (
    <div className="flex gap-x-3">
      <input
        onChange={handleChange}
        onKeyDown={handleKeydown}
        value={inputValue}
        className="border-none outline-none rounded-md ps-3"
        type="text"
        placeholder="add task"
      />
      <div
        onClick={handleClick}
        className="rounded-sm bg-white flex justify-center items-center p-2"
      >
        <IoMdAdd />
      </div>
    </div>
  );
};

export default Addtasks;
