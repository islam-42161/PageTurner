import { StatusBar, Dimensions, PixelRatio } from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Function to scale values based on screen width
const scale = size => (width / 375) * size;

// Adjust pixel ratio for more precise scaling
const scaleFont = size => size * PixelRatio.getFontScale();

// Define your dynamic theme values
const COLORS = {
  accent1: "#FBC09D",
  accent2: "#F6803C",
  light1: "#FFF9F5",
  light2: "#FEEFE7",
  dark1: "#180A0150",
  dark2: "#180A01",
};

const SPACING = {
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(24),
  xxl: scale(36),
};

const FONTSIZE = {
  caption: scaleFont(10),
  body: scaleFont(12),
  subheading: scaleFont(16),
  title: scaleFont(20),
  heading: scaleFont(24),
  display: scaleFont(30),
};

const FONTWEIGHT = {
  thin: "100",
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700",
  black: "900",
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export { COLORS, SPACING, FONTSIZE, FONTWEIGHT, STATUSBAR_HEIGHT };
