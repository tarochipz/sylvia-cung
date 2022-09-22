import React from "react";
import { Gallery } from "../../sharedComponents/gallery";

type imageType = "food" | "landscape" | "portraits";

export const Photography = () => {
  const [imageUrls, setImageUrls] = React.useState([]);

  const fetchImages = async (imageType: imageType) => {
    var requestOptions = {
      method: "GET",
    };

    fetch(`/api/photos/?imageType=${imageType}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setImageUrls(result.fileURLs);
      })
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    fetchImages("portraits");
  }, []);

  return <Gallery itemData={imageUrls} />;
};
