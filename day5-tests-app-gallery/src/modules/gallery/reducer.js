import types from ".";

const initalState = {
  loading: false,
  data: {
    photos: [],
  },
  errors: {
    show: false,
    message: "",
  },
};

export default (state = initalState, action) => {
  const { type, payload, meta, error } = action;
  switch (type) {
    case types.GALLERY_DATA_LOAD:
      return {
        ...state,
        ...meta,
      };
    case types.GALLERY_DATA_SET:
      return {
        ...state,
        ...meta,
        data: {
          ...payload,
        },
      };
    case types.ERROR_SHOW:
      return {
        ...state,
        ...meta,
        errors: {
          show: error,
          ...payload,
        },
      };
    case types.ERROR_HIDE:
      return {
        ...state,
        errors: {
          show: error,
          message: "",
        },
      };
    default:
      return state;
  }
};
