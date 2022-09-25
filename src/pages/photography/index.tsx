import React from "react";
import { Image, ImageType } from "../../../server";
import { Gallery } from "../../sharedComponents/gallery";

export const Photography = () => {
  const [images, setImages] = React.useState([]);

  const fetchImages = async (imageType: ImageType) => {
    var requestOptions = {
      method: "GET",
    };

    fetch(`/api/photos/?imageType=${imageType}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result: Image[]) => {
        setImages(result);
      })
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    fetchImages("portraits");
  }, []);

  return <Gallery images={images} />;
};
