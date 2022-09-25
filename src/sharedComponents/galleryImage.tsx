import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { Image } from "../../server";

export const GalleryImage = ({
  image,
  setOpen,
  setActiveImage,
}: {
  image: Image;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveImage: React.Dispatch<React.SetStateAction<Image>>;
}) => {
  const [loaded, setLoaded] = React.useState<Boolean>(false);

  return (
    <ImageListItem
      onClick={() => {
        setOpen(true);
        setActiveImage(image);
      }}
      key={image.id}
    >
      <img
        style={{ opacity: loaded ? "100" : "0" }}
        onLoad={() => {
          setLoaded(true);
        }}
        src={image.fileUrl}
        alt={image.fileName}
        loading="lazy"
      />
    </ImageListItem>
  );
};
