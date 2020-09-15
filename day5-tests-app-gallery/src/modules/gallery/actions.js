import types from ".";

export const showError = (message) => ({
  type: types.ERROR_SHOW,
  payload: { message },
  error: true,
  meta: {
    loading: false,
  },
});

export const hideError = () => ({
  type: types.ERROR_HIDE,
  error: false,
});

export const loadGalleryData = () => ({
  type: types.GALLERY_DATA_LOAD,
  meta: {
    loading: true,
  },
});

export const setGalleryData = (photos) => ({
  type: types.GALLERY_DATA_SET,
  payload: { photos },
  meta: {
    loading: false,
  },
});
