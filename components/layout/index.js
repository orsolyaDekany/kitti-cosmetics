import ResponsiveAppBar from "../navbar/ResponsiveAppBar";

function Layout(props) {
  return (
    <>
      <ResponsiveAppBar />
      {props.children}
    </>
  );
}

export default Layout;
