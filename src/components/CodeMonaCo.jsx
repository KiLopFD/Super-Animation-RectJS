import Editor, { useMonaco } from '@monaco-editor/react';
import { memo, useEffect, useRef } from 'react';
import { LangCode as file } from '../constant';
import { postCode } from '../services/api/utils/postCode';


const CodeMonaCo = ({ lang, submit, setCode, setRes, param, categories }) => {
    const refRes = useRef('');
    useEffect(()=>{
        if (refRes.current !== '')
        {
            // setCode(refRes.current)
            postCode(categories, param ,refRes.current,setRes)
        }
            
    }, [submit])
    return (
        <div>
            <Editor
                options={{
                    fontSize: 20,
                    cursorBlinking: 'expand',
                    wordWrap: 'on',
                    cursorWidth: 3,
                    cursorStyle: 'line',
                    quickSuggestions:true,
                }}
                className='h-[600px] mb-3 relative z-0'
                height=""
                language={lang}
                onChange={(val) => {
                    refRes.current = val
                }}
                theme='vs'
                beforeMount={(monaco) => {
                    import("monaco-themes/themes/Dracula.json").then((data) => {
                        // console.log({ ...data });
                        monaco.editor.defineTheme('vs', { ...data });
                    })
                }}


            />
        </div>
    );
}

export default memo(CodeMonaCo)
