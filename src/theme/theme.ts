import { createTheme } from "@mui/material/styles";
import { IThemeOptions, IPalette } from "./types/theme";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import lightPalette from "./lightPalette";
import typography from "./typography";

export const getThemeOptions = (palette: IPalette): IThemeOptions => {
  const fontFamily = '"IranSans"';
  typography.fontFamily = fontFamily;

  return {
    palette,
    typography,
    spacing: 4,
    components: overrides,
    breakpoints,
    shape: { borderRadius: 6 },
  };
};

export const lightTheme = createTheme(getThemeOptions(lightPalette));

const baseTheme = createTheme(getThemeOptions(lightPalette));

export default baseTheme;
