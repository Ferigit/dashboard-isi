
const primary = {
    get main() {
        return this[900]
    },
    50: '#BCF9ED',
    100: '#A1F6E5',
    200: '#86F4DE',
    300: '#6CF1D7',
    400: '#51EFCF',
    500: '#36ECC8',
    600: '#1BEAC1',
    700: '#14D4AE',
    800: '#11B998',
    900: 'rgb(87,66,226)',
}

const secondary = {
    get main() {
        return this[900]
    },
    50: '#DBDAE1',
    100: '#CDCBD4',
    200: '#BEBCC8',
    300: '#B0ADBC',
    400: '#A19EB0',
    500: '#938FA4',
    600: '#848198',
    700: '#76728B',
    800: '#69667C',
    900: '#5D5A6D',
}

const neutral = {
    get main() {
        return this[900]
    },
    50: '#EFF4F8',
    100: '#EDEEF1',
    200: '#D3DAE5',
    300: '#ADB6C5',
    400: '#6D7686',
    500: '#4F596A',
    600: '#303F4E',
    700: '#253543',
    800: '#17212A',
    900: '#101921',
}

const grayIcon = {
    get main() {
        return this[500]
    },
    50: '#D3D0DA',
    100: '#CCC9D5',
    200: '#C5C2CF',
    300: '#BEBBC9',
    400: '#B7B3C4',
    500: '#B1ADBE',
}

const gray = {
    get main() {
        return '#E4E3E8'
    },
}

const yellow = {
    get main() {
        return '#F4C300'
    },
}

const red = {
    get main() {
        return this[10]
    },
    10: '#EF2E58',
    50: '#EF2E5810',
}

const disable = {
    get main() {
        return '#C4EAE2'
    },
}

const disable2 = {
    get main() {
        return '#EBEAEF'
    },
}

const white = {
    get main() {
        return '#ffffff'
    },
}

const placeholder = {
    get main() {
        return '#CDCED0'
    },
}

const link = {
    get main() {
        return '#1E86FF'
    },
}

const text = {
    get main() {
        return '#7C778E'
    },
}

const lines = {
    get main() {
        return '#E4E3E8'
    },
}

const secondaryText = {
    get main() {
        return '#707070'
    },
}

const dark = {
    get main() {
        return '#130F26'
    },
}

const error = {
    get main() {
        return '#F9371C'
    },
}

const warning = {
    get main() {
        return '#F2994A'
    },
}
const active = {
    get main() {
        return '#1AB39410'
    },
}
const success = {
    get main() {
        return '#0F9D80'
    },
}

const BG = {
    get main() {
        return '#F7F8FA'
    },
}
const BGLight = {
    get main() {
        return '#7C778E10'
    },
}
const BGPrimaryLight = {
    get main() {
        return 'rgb(15 157 128 / 10%)'
    },
}
const colorLoadingOne = {
    get main() {
        return '#110c90'
    },
}
const colorLoadingTwo = {
    get main() {
        return '#15a97f'
    },
}
const colorLoadingThree = {
    get main() {
        return '#52b9e2'
    },
}
const colorLoadingFour = {
    get main() {
        return '#ffb747'
    },
}

const palette = {
    primary,
    secondary,
    neutral,
    grayIcon,
    gray,
    red,
    disable,
    disable2,
    white,
    placeholder,
    text,
    lines,
    link,
    secondaryText,
    dark,
    error,
    warning,
    success,
    BG,
    BGLight,
    BGPrimaryLight,
    yellow,
    active,
    colorLoadingOne,
    colorLoadingTwo,
    colorLoadingThree,
    colorLoadingFour,
}

export default palette
