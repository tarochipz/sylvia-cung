import * as React from "react";
import Masonry from "@mui/lab/Masonry";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Image } from "../../server";
import { GalleryImage } from "./galleryImage";

export const Gallery = ({ images }: { images: Image[] }) => {
  const [open, setOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState<Image>();

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
          <img style={{ maxHeight: "85vh" }} src={activeImage?.fileUrl} />
        </Box>
      </Modal>
      {images && images.length > 0 ? (
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {images.map((image) => (
            <GalleryImage
              key={image.fileName}
              image={image}
              setOpen={setOpen}
              setActiveImage={setActiveImage}
            />
          ))}
        </Masonry>
      ) : (
        <Box sx={{ textAlign: "center", padding: "25%" }}>
          <CircularProgress sx={{ color: "red" }} />
        </Box>
      )}
    </>
  );
};
