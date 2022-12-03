// import { makeStyles as MUIMakeStyles } from '@mui/styles'

// export const makeStyles = (styles, options) => {
//     return MUIMakeStyles(styles, options)
// }
// export const pxToRem = (px, baseFontSize = 16) =>
//     `${(px / baseFontSize).toFixed(3)}rem`
/* eslint-disable import/named */

import { makeStyles as MUIMakeStyles } from "@mui/styles";
import { ClassNameMap, Styles, WithStylesOptions } from "@mui/styles";
import { DistributiveOmit } from "@mui/types";
import { ITheme } from "./types/theme.d";
import ThemeConstants from "./constants";

const { htmlFontSize } = ThemeConstants;

export const pxToRem = (px: number, baseFontSize: number = htmlFontSize) =>
  `${(px / baseFontSize).toFixed(3)}rem`;

export const calculateColumnSize = (
  width: number,
  gutter: number,
  margin = gutter
) => {
  const containerWidth = width - 2 * margin;
  const colWidth = (containerWidth - 11 * gutter) / 12;
  return colWidth;
};

function makeStyles<ClassKey extends string = string>(
  style: Styles<ITheme, object, ClassKey>,
  options?: DistributiveOmit<WithStylesOptions<ITheme>, "withTheme">
): (props?: any) => ClassNameMap<ClassKey>;
function makeStyles<
  Props extends object = object,
  ClassKey extends string = string
>(
  styles: Styles<ITheme, Props, ClassKey>,
  options?: DistributiveOmit<WithStylesOptions<ITheme>, "withTheme">
): (props: Props) => ClassNameMap<ClassKey>;

function makeStyles(styles: any, options: any) {
  return MUIMakeStyles(styles, options);
}

export default makeStyles;
