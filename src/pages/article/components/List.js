import React from "react";
import Item from "./Item";

const List = ({ listData, deleteData,submittingStatus }) => {
  return (
    <>
      <div className="list">
        {listData.map((item) => {
          const { dateS, dateE, note, id } = item;
          return (
            <Item
              key={id}
              id={id}
              dateS={dateS}
              dateE={dateE}
              note={note}
              deleteData={deleteData}
              submittingStatus={submittingStatus}
            />
          );
        })}
      </div>
    </>
  );
}; 

export default List;
