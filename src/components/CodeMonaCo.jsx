import Editor, { useMonaco } from '@monaco-editor/react';
import { memo, useEffect, useRef, useState } from 'react';
import { LangCode as file } from '../constant';
import { postCode } from '../services/api/utils/postCode';
import { useSelector } from 'react-redux';


const CodeMonaCo = ({ submit, setRes, param, categories }) => {
    const lang = useSelector((state) => state.vsCodeReducer.lang)
    const theme = useSelector((state) => state.vsCodeReducer.theme)
    const refRes = useRef('');
    const [reloadTheme, setReloadTheme] = useState(theme)

    const handleChangeTheme = (monaco) => {
        import(`monaco-themes/themes/${theme}.json`).then((data) => {
            // console.log({ ...data });
            monaco.editor.defineTheme('vs', { ...data });
            console.log(data)
        })
    }
    useEffect(() => {
        if (refRes.current !== '') {
            // setCode(refRes.current)
            postCode(categories, param, refRes.current, setRes)
        }

    }, [submit])

    useEffect(() => {
        if (theme !== reloadTheme)
            handleChangeTheme(reloadTheme)
    }, [theme])

    return (
        <div>
            <Editor
                options={{
                    fontSize: 20,
                    cursorBlinking: 'expand',
                    wordWrap: 'on',
                    cursorWidth: 3,
                    cursorStyle: 'line',
                    quickSuggestions: true,
                }}
                className='h-[600px] mb-3 relative z-0'
                height=""
                language={lang}
                onChange={(val) => {
                    refRes.current = val
                }}
                theme='vs'
                beforeMount={(monaco) => {
                    setReloadTheme(monaco)
                }}


            />
        </div>
    );
}

export default memo(CodeMonaCo)
