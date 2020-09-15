import './Gallery.scss'
import React, { useEffect } from "react";
import Photos from "./Photos";
import Error from "./Error";
import Loading from "./Loading";
import { connect } from "react-redux";
import { loadGalleryData } from "../../modules/gallery/actions";
const Gallery = ({ photos, loading, error, loadGalleryData }) => {
  useEffect(() => {
    if (photos.length === 0) loadGalleryData();
  }, [photos, loadGalleryData]);
  return (
    <div className="gallery">
      <Error error={error} />
      <Loading loading={loading} />
      <Photos photos={photos} />
    </div>
  );
};

const mapStateToProps = ({
  gallery: {
    loading,
    errors: { message },
    data: { photos },
  },
}) => ({
  loading,
  photos,
  error: message,
});

const mapDispatchToProps = {
  loadGalleryData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
