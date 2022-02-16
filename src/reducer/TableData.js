const TableData = (state = [], action) => {
  switch (action.type) {
    case "TABLE_DATA":
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default TableData;
