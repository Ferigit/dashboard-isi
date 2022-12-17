import { makeStyles } from '../../theme/helpers'

const useTextEditorStyle = makeStyles(
    ({ palette: { gray, white, grayIcon, text, placeholder }, spacing }) => ({
        root: {
            width: '100%',

            '&.quill': {
                width: '100%',
                border: `1px solid ${gray.main}`,
                boxShadow: '0px 2px 4px rgba(221, 221, 222, 0.25)',
                borderRadius: spacing(2),
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                resize: 'vertical',
                minHeight: ({ minRows }) =>
                    minRows === undefined ? 0 : spacing(4 * minRows + 12),

                '& .ql-toolbar': {
                    border: 'unset',
                    order: ({ toolbarPosition }) => (toolbarPosition === 'top' ? 0 : 2),
                    top: ({ toolbarPosition }) =>
                        toolbarPosition === 'top' ? 0 : 'unset',
                    zIndex: 10000,
                    background: white.main,
                    padding: 0,

                    '& .ql-formats': {
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: spacing(6),
                        padding: spacing(3, 4),
                    },

                    '& button': {
                        color: grayIcon.main,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0,
                        width: spacing(3),

                        '&.ql-active': {
                            color: text.main,
                        },

                        '&:hover': {
                            border: 'unset',
                        },
                    },
                },

                '& .ql-container': {
                    border: 'unset',
                    color: text.main,
                    fontSize: spacing(3),
                    lineHeight: '145%',
                    background: white.main,
                    minHeight: ({ minRows }) =>
                        minRows === undefined ? 0 : spacing(4 * minRows),
                    display: 'flex',
                    flexDirection: 'column',

                    '& .ql-editor': {
                        flex: 1,
                        margin: ({ toolbarPosition }) =>
                            toolbarPosition === 'top' ? spacing(0, 4, 4) : spacing(4, 4, 0),
                        overflow: 'auto',
                        padding: 0,

                        '& em, & strong, & s': {
                            all: 'revert',
                        },

                        '&.ql-blank::before': {
                            fontSize: spacing(3),
                            color: placeholder.main,
                            fontStyle: 'unset',
                            lineHeight: '145%',
                        },
                    },
                },
            },
        },
    }),
)

export default useTextEditorStyle
