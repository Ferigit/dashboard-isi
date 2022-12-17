import cs from 'classnames'
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react'
import { renderToString } from 'react-dom/server'
// import ReactQuill from 'react-quill'

import { ReactComponent as BoldIcon } from '../../assets/icons/BoldIcon.svg'
import { ReactComponent as BulletListIcon } from '../../assets/icons/BulletListIcon.svg'
import { ReactComponent as ItalicIcon } from '../../assets/icons/ItalicIcon.svg'
import { ReactComponent as OrderedListIcon } from '../../assets/icons/OrderedListIcon.svg'
import { ReactComponent as StrikeIcon } from '../../assets/icons/StrikeIcon.svg'
import { ReactComponent as UnderlineIcon } from '../../assets/icons/UnderlineIcon.svg'
import QuillBetterTable from 'quill-better-table'
// import TextAreaFieldMessages from '../TextAreaField.messages'
import useTextEditorStyle from './useTextEditor.style'
import ReactQuill, { Quill } from 'react-quill-with-table'
import { Parser as HtmlToREactParser } from 'html-to-react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import 'react-quill/dist/quill.snow.css'
// import "react-quill-with-table/dist/quill.snow.css"
// import "react-quill-with-table/dist/quill.bubble.css"
const htmlToREactParser = new HtmlToREactParser()
Quill.register('better-table', QuillBetterTable)
const icons = ReactQuill.Quill.import('ui/icons')
icons.bold = renderToString(<BoldIcon />)
icons.strike = renderToString(<StrikeIcon />)
icons.underline = renderToString(<UnderlineIcon />)
icons.italic = renderToString(<ItalicIcon />)
icons.list.ordered = renderToString(<OrderedListIcon />)
icons.list.bullet = renderToString(<BulletListIcon />)

const TOOLBAR_OPTIONS = [
    [
        'bold',
        'italic',
        'underline',
        'strike',
        { direction: "rtl" },
        { list: 'ordered' },
        { list: 'bullet' },
        { align: [] },
        'link', 'image',
        'clean',
        ['better-table']
    ],
]

const TextEditorFieldBase = forwardRef(
    (
        {
            onChange,
            value,
            placeholder,
            toolbarPosition = 'bottom',
            minRows,
            className,
        },
        ref,
    ) => {
        const [quillValue, setQuillValue] = useState(value || '')
        // const { formatMessage } = useIntl()
        const reactQuillRef = useRef(null)

        const style = useTextEditorStyle({ toolbarPosition, minRows })

        const onValueChange = useCallback((content) => {
            setQuillValue(content)

            // onChange(content)
        }, [])
        return (<CKEditor editor={ClassicEditor} />)
        // useImperativeHandle(ref, () => ({
        //     focus() {
        //         reactQuillRef.current?.editor.focus()
        //     },
        // }))

        // useEffect(() => {
        //     if (value !== quillValue) {
        //         setQuillValue(value)
        //     }
        // }, [value])
        // return (
        //     <ReactQuill value={quillValue}
        //         modules={{ table: false, toolbar: TOOLBAR_OPTIONS }}
        //         theme={'snow'}
        //         onChange={onValueChange}
        //         className={cs(style.root, className)}

        //     />
        // )
        // return (
        // <ReactQuill
        //     ref={reactQuillRef}
        //     className={cs(style.root, className)}
        //     theme="snow"
        //     placeholder={placeholder}
        //     direction="rtl"
        //     modules={{
        //         toolbar: {
        //             container: TOOLBAR_OPTIONS,
        //         },
        //     }}
        //     value={quillValue}
        //     onChange={onValueChange}
        //     minRows={3}
        // />
        // )
    },
)

TextEditorFieldBase.displayName = 'TextEditorFieldBase'
export default TextEditorFieldBase
