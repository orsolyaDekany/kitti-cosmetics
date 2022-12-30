import ImageGallery from "../../components/gallery/ImageGallery";
import { makeStyles } from "@material-ui/styles";
import { container, centerDiv, roseColor } from "../../assets/jss/mui-kit";
import Parallax from "../../components/parallax/Parallax";
import SectionTitle from "../../components/sectiontitle/Sectiontitle";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  container,
  centerDiv,
  parallexTitle: {
    margin: "auto",
    color: roseColor,
  },
});

function Munkaim() {
  const classes = useStyles();

  return (
    <>
      <Parallax
        responsive
        filterLight
        image={"gallery_parallax.jpg"}
        alt="Kitti galéria munkáim"
      >
        <Typography
          sx={{
            fontSize: {
              lg: 80,
              md: 70,
              sm: 50,
              xs: 50,
            },
          }}
          className={classes.parallexTitle}
          variant="h1"
        >
          Munkáim
        </Typography>
      </Parallax>
      <div className={classes.centerDiv}>
        <div className={classes.container}>
          <SectionTitle
            title="Szemhéjtetoválások"
            subtitle="Púderes, hibrid, szálas"
          ></SectionTitle>
          <ImageGallery></ImageGallery>
        </div>
      </div>
    </>
  );
}
export default Munkaim;
