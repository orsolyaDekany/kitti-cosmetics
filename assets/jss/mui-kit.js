const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
};

const container = {
    ...containerFluid,
    "@media (min-width: 595px)": {
        maxWidth: "595px",
    },
    "@media (min-width: 600px)": {
        maxWidth: "600px",
    },
    "@media (min-width: 768px)": {
        maxWidth: "768px",
    },
    "@media (min-width: 889px)": {
        maxWidth: "889px",
    },
    "@media (min-width: 122px)": {
        maxWidth: "889px",
    },
    zIndex: "12",
};

const centerDiv = {
    background: "#FFFFFF",
    textAlign: "center",
    position: "relative",
    zIndex: "3",
    padding: "30px 0 20px 0",
}

export const roseColor = "#FFF6F4";
export const orangeColor = "#F7A392";
export const darkColor = "#886E6D";

export {
    centerDiv,
    container,
    containerFluid
};