import ThemeConstants from './constants'
import { pxToRem } from './helpers'

const {
    htmlFontSize,
    fontFamily,
    fontSize,
    fontWeightLight, //300
    fontWeightRegular, //400
    fontWeightMedium, //500
    fontWeightSemiBold, //600
    fontWeightBold, //700
} = ThemeConstants

const typography = {
    htmlFontSize,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightSemiBold,
    fontWeightBold,
    h1: {
        fontWeight: fontWeightSemiBold,
        fontSize: pxToRem(20),
        lineHeight: '29px',
    },
    h2: {
        fontWeight: fontWeightSemiBold,
        fontSize: pxToRem(18),
        lineHeight: '26.1px',
    },
    h3: {
        fontWeight: fontWeightBold,
        fontSize: pxToRem(16),
        lineHeight: '23.2px',
    },
    h4: {
        fontWeight: fontWeightBold,
        fontSize: pxToRem(14),
        lineHeight: '23.2px',
    },
    h5: {
        fontWeight: fontWeightBold,
        fontSize: pxToRem(10),
        lineHeight: '23.2px',
    },
    caption: {
        fontWeight: fontWeightBold,
        fontSize: pxToRem(16),
        lineHeight: '23.2px',
    },
    body1: {
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(12),
        lineHeight: '23.2px',
    },
    body2: {
        fontWeight: fontWeightSemiBold,
        fontSize: pxToRem(12),
        lineHeight: '17.4px',
    },
}

export default typography
