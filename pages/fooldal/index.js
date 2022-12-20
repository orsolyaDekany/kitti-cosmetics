import Image from "next/image";
import Grid from "@mui/material/Grid";
import IntroductionImage from "../../assets/introduction.svg";
import Kitti from "../../assets/Kitti_intro.png";
import DecorationDivider from "../../assets/decoration_bottom.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiGrid-root": {
      backgroundColor: "#FFF6F4",
      padding: "0",
    },
  },
  BannerText: {
    lineHeight: "1.5",
    color: "#252525",
    fontFamily: "Playfair Display",
  },
  BannerText2: {
    color: "#F7A392",
    fontFamily: "Playfair Display",
  },
  BannerTextContainer: {
    width: "80%",
  },
  Image: {
    marginLeft: "100px",
  },
  IntroductionSection: {
    padding: "80px 100px",
  },
});

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={{ sm: 12, md: 2 }}>
        <Grid item lg={6} sm={6}>
          <Image
            alt="Kitti"
            className={classes.Image}
            src={Kitti}
            width="400px"
          ></Image>
        </Grid>
        <Grid item lg={6} sm={6}>
          <div className={classes.BannerTextContainer}>
            <h1 className={classes.BannerText}>
              Varázsold Szemöldököd Tökéletesebbé
            </h1>
            <h2 className={classes.BannerText2}>Kolozsvári Kittivel</h2>
          </div>
        </Grid>
      </Grid>

      <Grid container className={classes.IntroductionSection} spacing={10}>
        <Grid
          item
          className={classes.BannerTextContainer}
          xs={12}
          lg={6}
          sx={{ width: "20%" }}
        >
          <h1>Kolozsvári Kitti Sminktetováló</h1>
          <span>
            „Az elegancia az egyetlen szépség, mely soha nem fakul.” a
            természetességgel párban.
          </span>
          <span>
            Pont emiatt is törekszem a természetes szépség erősítésére,
            kiegészítésére és elérésére. Amennyiben megszületett az elhatározás,
            hogy sminktetoválást szeretne, de még szüksége van bővebb
            információkra böngésszen tovább az oldalamon és keressen bizalommal.
            Abban a szerencsés helyzetben tudhatom magam, hogy a szakmám egyben
            a hivatásom is, amellyel 2014 óta foglalkozom. Azóta is folyamatos
            továbbképzéseken veszek részt, hogy a legújabb eszközökkel és
            legjobb tudással fogadhassam a hozzám forduló kedves vendégeimet.
          </span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Image alt="Kitti" src={IntroductionImage}></Image>
        </Grid>
      </Grid>

      <h1>Introduction</h1>
      <h1>Services</h1>
      <h1>Salon</h1>
      <h1>Gallery</h1>
      <h1>Vélemények</h1>
      <h1>Footer</h1>
    </>
  );
}
export default HomePage;
