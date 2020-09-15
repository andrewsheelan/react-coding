import React from "react";
import Card from "./Card";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import {lorem} from 'faker'
const Photos = ({ photos }) => {
  return (
    <div className="gallery-photos">
      {photos.map((photo) => (
        <Card key={photo.id}>
          <CardImage src={photo.download_url} />
          <CardTitle>{photo.author}</CardTitle>
          <CardDescription>{lorem.lines(10)}</CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default Photos;
