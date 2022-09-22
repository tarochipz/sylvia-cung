import React from "react";
import { Gallery } from "../../sharedComponents/gallery";
import { itemData } from "./testImageData";

export const Photography = () => {
  //   const [images, setImages] = React.useState([]);

  //   const fetchImages = async () => {
  //     var requestOptions = {
  //       method: "GET",
  //     };

  //     fetch("/photos", requestOptions)
  //       .then((response) => {
  //         console.log("RESPONSE:", response);
  //         return response.text();
  //       })
  //       .then((result) => {
  //         console.log("RESULT:", result);
  //         setImages(result.mediaItems);
  //       })
  //       .catch((error) => console.log("error", error));
  //   };

  //   React.useEffect(() => {
  //     fetchImages();
  //   }, []);

  return <Gallery itemData={itemData} />;
};
