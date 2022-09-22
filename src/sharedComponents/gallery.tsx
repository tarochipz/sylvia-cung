import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import Masonry from "@mui/lab/Masonry";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export const Gallery = ({
  itemData,
}: {
  itemData: { img: string; title: string }[];
}) => {
  const [open, setOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "450",
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style }}>
          <img style={{ width: "100%", height: "100%" }} src={activeImage} />
        </Box>
      </Modal>
      {/* <h1>Portraits</h1> */}
      <Masonry columns={3} spacing={2}>
        {itemData.map((item) => (
          <ImageListItem
            onClick={() => {
              setOpen(true);
            //   setActiveImage(
            //     `${item.baseUrl}=w${item.mediaMetadata.width}-h${item.mediaMetadata.height}`
            //   );
            }}
            // key={item.id}
          >
            {/* <img
              src={`${item.baseUrl}=w${item.mediaMetadata.width}-h${item.mediaMetadata.height}`}
              alt={item.filename}
              loading="lazy"
            /> */}
          </ImageListItem>
        ))}
      </Masonry>
    </>
  );
};
