import React from "react";

const ListTable = ({ todoList, deleteTodoItem, editTodoItem, updateEditName, updateEditDescription, updateEditPrice, updateEditCategory, saveTodoItem }) => {
  return (
    <table className="table" style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th style={{width: "5%"}}>Index</th>
          <th style={{width: "10%"}}>Name</th>
          <th style={{width: "45%"}}>Description</th>
          <th style={{width: "10%"}}>Price</th>
          <th style={{width: "10%"}}>Category</th>
          <th style={{width: "20%"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((item) => (
          <tr key={item.no}>
            <td>{item.no}</td>
            <td>
            {item.editing ? (
              <>
                <input
                  type="text"
                  value={item.editTitle}
                  onChange={(e) => updateEditName(item.no, e.target.value)}
                />
              </>
            ) : (
              <span style={item.done ? { textDecoration: "line-through" } : {}}>
                {item.name}
              </span>
            )}
            </td>
            <td>
            {item.editing ? (
              <>
                <input
                  type="text"
                  value={item.editDescription}
                  onChange={(e) => updateEditDescription(item.no, e.target.value)}
                />
              </>
            ) : (
              <span style={item.done ? { textDecoration: "line-through" } : {}}>
                {item.description}
              </span>
            )}
            </td>
            <td>
            {item.editing ? (
              <>
                <input
                  type="text"
                  value={item.editPrice}
                  onChange={(e) => updateEditPrice(item.no, e.target.value)}
                />
              </>
            ) : (
              <span style={item.done ? { textDecoration: "line-through" } : {}}>
                {item.price}
              </span>
            )}
            </td>
            <td>
            {item.editing ? (
              <>
                <input
                  type="text"
                  value={item.editCategory}
                  onChange={(e) => updateEditCategory(item.no, e.target.value)}
                />
              </>
            ) : (
              <span style={item.done ? { textDecoration: "line-through" } : {}}>
                {item.category}
              </span>
            )}
            </td>
            <td>
            {item.editing ? (
                <div className="btn-group" role="group">
                  <button className="btn btn-success" type="button" data-no={item.no} onClick={() => saveTodoItem(item.no)}>
                    완료
                  </button>
                </div>
              ) : (
                <div className="btn-group" role="group">
                  <button className="btn btn-primary" type="button" data-no={item.no} onClick={() => editTodoItem(item.no)}>
                    수정
                  </button>
                  <button className="btn btn-danger" type="button" data-no={item.no} onClick={() => deleteTodoItem(item.no)}>
                    삭제
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;