import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import Skeleton from "@mui/material/Skeleton";
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
      <div
        style={{
          opacity: loaded ? "0" : "100",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" width="inherit" height="inherit" />
      </div>
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
