import React, { memo, useEffect, useState } from 'react'
import Split from 'react-split'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { CodeMonaCo, CollapseDefault, SplitBar } from '../components';
import { Button } from '@mui/material';
import { postCode } from '../services/api/utils/postCode';
import { useLocation } from 'react-router-dom';

const CodeEvaluate = () => {
  const location = useLocation()
  const { param } = location.state
  const [submit, setSubmit] = useState(false);
  const [res, setRes] = useState(null);
  const [code, setCode] = useState(null);
  const [lang, setLang] = useState('javascript')
  const _lang = ["cpp", "java", "javascript", "python"]

  const handleSubmit = ()=>{
    setSubmit(!submit)
  }
  // useEffect(()=>{
  //   console.log(code)
  //   if (code !== null)
  //     postCode(param, code, setRes);
  // }, [submit])

  useEffect(()=>{
    console.log(res)
  }, [res])
  return (
    <>
      <div className="code-evaluate pt-14 w-full">
        <Split
          className='flex h-[800px] px-3'
          sizes={[50, 50]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <div className="detail-problem md:w-full bg-[#333] h-full rounded-lg overflow-hidden">
            <div className="main-content overflow-y-auto h-full rounded-lg">
              <div className="pt-3 px-5 font-sans">
                <p className="inner-title text-center text-2xl mb-14 font-bold">Bài 1. Print Hello World !</p>
                <p className="inner-problem mb-10">
                  Nhiệm vụ của bạn ở bài tập này rất đơn giản, bạn hãy nhập vào 1 số nguyên x và in ra 3 dòng : Dòng 1 là số x bạn vừa nhập từ bàn phím, Dòng 2 in ra dòng chữ "Hello World !" và dòng 3 in ra "kiLop Python programming !"
                </p>
                <p className="input-format font-bold mb-3">Input format</p>
                <p className="input-format mb-10">1 dòng duy nhất chứa số nguyên x</p>
                <p className="input-format font-bold mb-3">Constraints</p>
                <p className="input-format mb-10">{'1<=x<=1000;'}</p>
                <p className="input-format font-bold mb-3">Output Format</p>
                <p className="input-format mb-10">In ra 3 dòng theo yêu cầu</p>
                <p className="input-format font-bold mb-3">Sample Input 0</p>
                <p className="input-format mb-10">5</p>
                <p className="input-format font-bold mb-3">Sample Output 0</p>
                <p className="input-format mb-3">5</p>
                <p className="input-format mb-3">Hello World !</p>
                <p className="input-format mb-3">fullhouse Python programming !</p>
              </div>
            </div>

          </div>
          <div className="code-submit-hint bg-[#333] h-full rounded-lg overflow-y-auto">
            <div className="choose-lang flex h-[50px] bg-[#414141]">
              <CollapseDefault categories={lang} setCategories={setLang} data={_lang} key={Math.random()} />
            </div>
            <div className="wrap-code-editor rounded-lg overflow-hidden">
              <CodeMonaCo lang={lang} key={lang} setCode={setCode} submit={submit} setRes={setRes}/>
            </div>

            <div className="inner-wrap p-2">
              <Button style={{color:'white', background:'green'}} onClick={()=>{handleSubmit()}}>Nộp</Button>
            </div>
          </div>
        </Split>
      </div>
    </>
  )
}

export default memo(CodeEvaluate)