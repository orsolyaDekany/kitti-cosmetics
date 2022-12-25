import Image from "next/image";
import Grid from "@mui/material/Grid";
import ServiceArea from "../../components/services/ServiceArea";
import { makeStyles } from "@material-ui/styles";
import SectionTitle from "../../components/sectiontitle/Sectiontitle";

import {
  roseColor,
  orangeColor,
  darkColor,
  centerDiv,
  container,
} from "../../assets/jss/mui-kit";
import Parallax from "../../components/parallax/Parallax";

const useStyles = makeStyles({
  centerDiv,
  container,
  root: {
    "& .MuiGrid-root": {
      backgroundColor: "#FFF6F4",
    },
  },
  roseColor,
  orangeColor,
  darkColor,
  heroTitle: {
    lineHeight: "1.5",
    color: "#FFFFFF",
    fontFamily: "Playfair Display",
  },
  heroDescription: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
  },
  alignCenterGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  introductionSection: {
    marginLeft: "600px",
    width: "50px",
  },
});

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Parallax
        responsive
        filterLight
        image={"/Kitti_homepage.png"}
        alt="Kitti Image"
      >
        <div className={classes.container}>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              className={classes.introductionSection}
            >
              <h1 className={classes.heroTitle.darkColor}>
                Kolozsvári Kitti Sminktetováló
              </h1>
              <p className={classes.heroDescription.darkColor}>
                „Az elegancia az egyetlen szépség, mely soha nem fakul.”
              </p>
            </Grid>
          </Grid>
        </div>
      </Parallax>

      <div style={{ backgroundColor: roseColor }} className={classes.centerDiv}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <SectionTitle
                title="Szolgáltatásaim"
                subtitle="Tetoválások"
              ></SectionTitle>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <ServiceArea
                description="Félsatír, teljes ajaksatír, aquarell és 3D ajaktetoválásokat készítek."
                image={"/lips.svg"}
                title="Ajak tetoválás"
              ></ServiceArea>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <ServiceArea
                description="Púder, hibrid és mikroszálas szemöldöktetoválásokat készítek, teljesen személyre szabottan, konzultációt követően. Segítek kiválasztani a számodra megfelelőt."
                image={"/eyebrow.svg"}
                title="Szemöldök tetoválás"
              ></ServiceArea>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <ServiceArea
                description="Szempillatősűrítés, tusvonal (normal, vastag), lágy füstöshatás, nutterfly (füstös hatás durva variációja) és alsóvonal szemhéjtetoválásokat készítek."
                image={"/eyelid.svg"}
                title="Szemhéj tetoválás"
              ></ServiceArea>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={classes.centerDiv}>
        <div className={classes.container}>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              className={classes.alignCenterGrid}
            >
              <Image
                alt="Kitti"
                src="/Kitti_introduction.png"
                width={420}
                height={300}
              ></Image>
              <h1>Kolozsvári Kitti</h1>
              <h2 className={classes.orangeColor}>Sminktetováló</h2>
              <span>
                „Az elegancia az egyetlen szépség, mely soha nem fakul.” a
                természetességgel párban.
              </span>
              <span>
                Pont emiatt is törekszem a természetes szépség erősítésére,
                kiegészítésére és elérésére. Amennyiben megszületett az
                elhatározás, hogy sminktetoválást szeretne, de még szüksége van
                bővebb információkra böngésszen tovább az oldalamon és keressen
                bizalommal. Abban a szerencsés helyzetben tudhatom magam, hogy a
                szakmám egyben a hivatásom is, amellyel 2014 óta foglalkozom.
                Azóta is folyamatos továbbképzéseken veszek részt, hogy a
                legújabb eszközökkel és legjobb tudással fogadhassam a hozzám
                forduló kedves vendégeimet.
              </span>
            </Grid>
          </Grid>
        </div>
      </div>

      <h1>Introduction</h1>
      <h1>Services</h1>
      <h1>Salon</h1>
      <h1>Vélemények</h1>
      <h1>Footer</h1>
    </>
  );
}
export default HomePage;
