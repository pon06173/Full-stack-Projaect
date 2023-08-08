import React, { useState } from "react";

const InputItem = ({ addTodoItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const onClickHandler = () => {
    if (name.trim() !== "" && description.trim() !== "" && price.trim() !== "" && category.trim() !== "") {
      addTodoItem({ name, description, price, category });
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-success" type="button" onClick={onClickHandler}>
          Add
        </button>
      </div>
    </div>
  );
};


export default InputItem;