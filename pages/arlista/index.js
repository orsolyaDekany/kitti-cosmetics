import Parallax from "../../components/parallax/Parallax";
import Image from "next/image";
import { centerDiv, container, roseColor } from "../../assets/jss/mui-kit";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  centerDiv,
  container,
  roseColor,
  parallexTitle: {
    margin: "auto",
    color: roseColor,
  },
});

function Arlista() {
  const classes = useStyles();

  return (
    <>
      <Parallax
        responsive
        filterLight
        image={"pricelist_parallax.jpg"}
        alt="Kitti galéria munkáim"
        title="fff"
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
          ÁRLISTA
        </Typography>
      </Parallax>
      <div className={classes.centerDiv}>
        <div className={classes.container}>
          <Image
            alt="Kitti"
            src="/pricelist.png"
            width={420}
            height={650}
          ></Image>
        </div>
      </div>
    </>
  );
}
export default Arlista;
