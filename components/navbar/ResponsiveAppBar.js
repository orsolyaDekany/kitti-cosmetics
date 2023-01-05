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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import navItems from "./ResponsiveAppBar.data";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { darkColor, orangeColor, roseColor } from "../../assets/jss/mui-kit";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    "& .MuiAppBar-root": {
      backgroundColor: "#FFF6F4",
      padding: "6px 20px",
      boxShadow: "none",
      letterSpacing: "1px",
    },
    "& .MuiButton-root": {
      padding: "0px 10px",
    },
  },
});

function ResponsiveAppBar(props) {
  const classes = useStyles();

  const trigger = useScrollTrigger();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image
        alt="Logo"
        style={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
        }}
        src="/logo.svg"
        width={130}
        height={130}
      />
      <Divider />
      <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                key={navItem}
                href={navItem.path}
                style={{
                  textTransform: "capitalize",
                  color: darkColor,
                  fontSize: "16px",
                  textDecoration: "none",
                  margin: "0px 12px",
                }}
              >
                {navItem.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className={classes.root}>
      <AppBar
        component="nav"
        elevation={trigger ? 24 : 0}
        style={{
          backgroundColor: trigger ? roseColor : "transparent",
          boxShadow: trigger ? "300px 300px 5px orangeColor" : "none",
          transition: "background-color 1s ease-out",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            style={{
              backgroundColor: darkColor,
              color: roseColor,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Image alt="Logo" src="/logo.svg" width={130} height={130} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((navItem) => (
              <Link
                className={router.pathname == "/" ? "active" : ""}
                key={navItem}
                href={navItem.path}
                style={{
                  textTransform: "uppercase",
                  fontSize: "14px",
                  textDecoration: "none",
                  padding: "2px 12px",
                  color: trigger ? darkColor : roseColor,
                }}
              >
                {navItem.label}
              </Link>
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
              backgroundColor: roseColor,
            },
          }}
        >
          {drawer}
        </Drawer>
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
