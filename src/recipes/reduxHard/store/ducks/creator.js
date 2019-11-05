// Actions
const type = {
  FOOTER_CUSTOM: "FOOTER_CUSTOM",
  HEADER_CUSTOM: "HEADER_CUSTOM"
};

// Reducers
const initialState = {
  header: {
    columns: 0,
    rows: 0,
    backgroundColor: "#FFF"
  },
  footer: {
    columns: 0,
    rows: 0,
    backgroundColor: "#FFF"
  }
};

export default function creatorReducer(state = initialState, action) {
  switch (action.type) {
    case type.FOOTER_CUSTOM:
      return {
        ...state,
        footer: {
          columns: action.columns,
          rows: action.rows,
          backgroundColor: action.bgColor
        }
      };
      break;
    case type.HEADER_CUSTOM:
      return {
        ...state,
        header: {
          columns: action.columns,
          rows: action.rows,
          backgroundColor: action.bgColor
        }
      };
      break;
    default:
      return state;
  }
}

// Creators
export const Creators = {
  footerCustom: (columns, rows, bgColor) => ({
    colunns: columns,
    rows: rows,
    backgroundColor: bgColor
  }),

  headerCustom: (columns, rows, bgColor) => ({
    colunns: columns,
    rows: rows,
    backgroundColor: bgColor
  })
};
