import ImageGallery from "../../components/gallery/ImageGallery";
import { makeStyles } from "@material-ui/styles";
import { container, centerDiv } from "../../assets/jss/mui-kit";
import Parallax from "../../components/parallax/Parallax";
import SectionTitle from "../../components/sectiontitle/Sectiontitle";

const useStyles = makeStyles({
  container,
  centerDiv,
});

function Munkaim() {
  const classes = useStyles();

  return (
    <>
      <Parallax
        responsive
        filterLight
        image={"Gallery_parallax.jpg"}
        alt="Kitti galéria munkáim"
      ></Parallax>
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
