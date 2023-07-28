import React, { memo, useEffect, useState } from 'react'
import Split from 'react-split'
import { CodeMonaCo, CollapseDefault} from '../components';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { TabsCustom } from '../components/index';
import { getProblem } from '../services/api/utils/getProblem';
import { ThemeCode } from '../constant/VsCode';

const CodeEvaluate = () => {
  const location = useLocation()
  const { categories, param } = location.state
  const [submit, setSubmit] = useState(false);
  const [res, setRes] = useState(null);
  const [code, setCode] = useState(null);
  const [lang, setLang] = useState('javascript')
  const [problem, setProblem] = useState('')
  const _lang = ["cpp", "java", "javascript", "python"]

  const handleSubmit = () => {
    setSubmit(!submit)
  }
  // useEffect(()=>{
  //   console.log(code)
  //   if (code !== null)
  //     postCode(param, code, setRes);
  // }, [submit])

  useEffect(() => {
    console.log(res)
  }, [res])
  useEffect(()=>{
    getProblem(param,categories,setProblem)
  },[])
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
              <div className="pt-3 px-5 font-sans" dangerouslySetInnerHTML={{ __html: problem["code"] }}>

                {/* <p className="inner-title text-center text-2xl mb-14 font-bold">Bài 1. Print Hello World !</p>
                <p className="inner-problem mb-10">
                  Nhiệm vụ của bạn ở bài tập này rất đơn giản, bạn hãy nhập vào 1 số nguyên x và in ra 3 dòng : Dòng 1 là số x bạn vừa nhập từ bàn phím, Dòng 2 in ra dòng chữ "Hello World !" và dòng 3 in ra "{BrandWeb.brand_name} Python programming !"
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
                <p className="input-format mb-3">{BrandWeb.brand_name} Python programming !</p> */}
              </div>
            </div>

          </div>
          <div className="code-submit-hint bg-[#333] h-full rounded-lg overflow-y-auto">
            <div className="choose-lang flex h-[40px] bg-[#414141] items-center">
              <CollapseDefault key={'choose-lang'} data={_lang} choose={'lang'}/>
              <CollapseDefault key={'choose-theme'} data={ThemeCode} choose={'theme'}/>
              
            </div>
            <div className="wrap-code-editor rounded-lg overflow-hidden">
              <CodeMonaCo key={'code-mona-co'} submit={submit} setRes={setRes} param={param} categories={categories} />
            </div>

            <div className="wrap p-2 h-[120px]">
              <div className="inner-wrap bg-[#414141] w-full h-full">
                <div className='grid grid-cols-12'>
                  <div className="col-span-10">
                    <div className="inner-wrap px-2">
                      <TabsCustom />
                    </div>
                  </div>
                  <div className='col-span-2'>
                    <div className="inner-wrap flex justify-center">
                      <div className="btn-wrap">
                        <Button style={{ color: 'white', background: 'green', margin: "0 auto" }} onClick={() => { handleSubmit() }}>Nộp</Button>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </Split>
      </div>
    </>
  )
}

export default memo(CodeEvaluate)