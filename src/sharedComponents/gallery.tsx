import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import Masonry from "@mui/lab/Masonry";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export const Gallery = ({ itemData }: { itemData: string[] }) => {
  const [open, setOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState<string>();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "450",
  };

  console.log("itemData", itemData);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style }}>
          <img style={{ width: "100%", height: "100%" }} src={activeImage} />
        </Box>
      </Modal>
      {/* <h1>Portraits</h1> */}
      <Masonry columns={3} spacing={2}>
        {itemData && itemData.map((item) => (
          <ImageListItem
            onClick={() => {
              setOpen(true);
              setActiveImage(`${item}`);
            }}
            // key={item.id}
          >
            <img
              src={`${item}`}
              // alt={item.filename}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </Masonry>
    </>
  );
};
