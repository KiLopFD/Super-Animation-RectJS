import Editor, { useMonaco } from '@monaco-editor/react';
import { memo, useEffect, useRef, useState } from 'react';
import { LangCode as file } from '../constant';
import { postCode } from '../services/api/utils/postCode';
import { useSelector } from 'react-redux';
import { postCodeExpress } from '../services/api/utils/postCodeExpress';



const CodeMonaCo = ({ submit, setRes, param, categories, options }) => {
    const lang = useSelector((state) => state.vsCodeReducer.lang)
    const theme = useSelector((state) => state.vsCodeReducer.theme)
    const refRes = useRef('');
    const [reloadTheme, setReloadTheme] = useState(theme)

    const handleChangeTheme = (monaco) => {
        import(`monaco-themes/themes/${theme}.json`).then((data) => {
            // console.log({ ...data });
            monaco.editor.defineTheme('vs', { ...data });
            // console.log(data)
        })
    }
    useEffect(() => {
        if (refRes.current !== '') {
            // setCode(refRes.current)
            postCode(categories=lang, param, refRes.current, setRes, options)
            // postCodeExpress(refRes.current, setRes)
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
                className='h-[570px] mb-3 relative z-0'
                height=""
                language={lang}
                onChange={(val) => {
                    refRes.current = val
                }}
                theme='vs'
                beforeMount={(monaco) => {
                    setReloadTheme(monaco)
                    if (theme==reloadTheme)
                    {
                        import(`monaco-themes/themes/Dracula.json`).then((data) => {
                            // console.log({ ...data });
                            monaco.editor.defineTheme('vs', { ...data });
                            // console.log(data)
                        })
                    }
                }}


            />
        </div>
    );
}

export default memo(CodeMonaCo)
