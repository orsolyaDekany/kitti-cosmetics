import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import navItems from "./ResponsiveAppBar.data";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    "& .MuiAppBar-root": {
      boxShadow: "10px 10px 5px 0px #F7A392",
      backgroundColor: "#FFF6F4",
      padding: "6px 20px",
    },
    "& .MuiButton-root": {
      padding: "0px 10px",
    },
  },
});

function ResponsiveAppBar(props) {
  const classes = useStyles();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((navItem) => (
          <Link
            key={navItem}
            href={navItem.path}
            style={{
              fontFamily: "Playfair Display",
              textTransform: "capitalize",
              color: "#252525",
              fontSize: "18px",
              textDecoration: "none",
              margin: "0px 12px",
            }}
          >
            {navItem.label}
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className={classes.root}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="#252525"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Image
            alt="Logo"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
            src={logo}
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((navItem) => (
              <Link
                className={router.pathname == "/" ? "active" : ""}
                key={navItem}
                href={navItem.path}
                style={{
                  fontFamily: "Playfair Display",
                  textTransform: "capitalize",
                  color: "#252525",
                  fontSize: "18px",
                  textDecoration: "none",
                  margin: "0px 12px",
                }}
              >
                {navItem.label}
              </Link>
              /*<Button
                key={item}
                sx={{
                  fontFamily: "Playfair Display",
                  textTransform: "capitalize",
                  color: "#252525",
                  fontSize: "18px",
                }}
              >
                {item}
              </Button>*/
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#FFF6F4",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveAppBar;
