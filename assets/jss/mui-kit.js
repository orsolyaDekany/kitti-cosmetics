const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
};

const container = {
    ...containerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px",
    },
    zIndex: "12",
};

const centerDiv = {
    background: "#FFFFFF",
    textAlign: "center",
    position: "relative",
    zIndex: "3",
    margin: "-2rem 0",
}

export const roseColor = "#FFF6F4";
export const orangeColor = "#F7A392";
export const darkColor = "#252525";

export {
    centerDiv,
    container,
    containerFluid
};