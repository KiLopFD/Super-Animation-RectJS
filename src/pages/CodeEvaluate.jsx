import React, { memo, useEffect, useState } from 'react'
import Split from 'react-split'
import { CodeMonaCo, CollapseDefault, NavSection } from '../components';
import { Button } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { TabsCustom } from '../components/index';
import { getProblem } from '../services/api/utils/getProblem';
import { ThemeCode } from '../constant/VsCode';

const CodeEvaluate = () => {
  const location = useLocation()
  const { categories, param } = location.state
  const [submit, setSubmit] = useState(false);
  const [res, setRes] = useState(null);
  const [options, setOptions] = useState('');
  const [problem, setProblem] = useState('')
  const _lang = ["cpp", "java", "javascript", "python"]

  const handleSubmit = (val) => {
    setOptions(val)
    setSubmit(!submit)
  }
  // useEffect(()=>{
  //   console.log(code)
  //   if (code !== null)
  //     postCode(param, code, setRes);
  // }, [submit])

  // useEffect(() => {
  //   console.log(res)
  // }, [res])
  useEffect(() => {
    // console.log(param)
    getProblem(param, categories, setProblem)
  }, [])
  return (
    <>
      <div className="code-evaluate pt-14 w-full">
        <Split
          className='flex flex-wrap lg:h-[800px] h-auto px-3'
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
          <div className="detail-problem lg:mb-0 mb-10 min-w-full lg:min-w-0 bg-[#333] h-full rounded-lg overflow-hidden">
            <div className="main-content overflow-y-auto h-full rounded-lg">
              <NavSection />
              {/* <div className="pt-3 px-5 font-sans" dangerouslySetInnerHTML={{ __html: problem["code"] }}>
              </div> */}
              <div className="main-section p-3">
                {categories === 'python' && (<p className='italic bg-[#333888] px-2 rounded-lg mb-3'>Để tăng độ nghiêm ngặt bạn lưu ý đáp án lưu trong 1 biến và biến chứa đáp án đó đặt tên là result. Nhớ là ngôn ngữ python nhé 😊</p>)}
                <Outlet context={{
                  description: problem.code
                }} />
              </div>
            </div>

          </div>
          <div className="code-submit-hint min-w-full lg:min-w-0 bg-[#333] h-full rounded-lg overflow-y-auto">
            <div className="choose-lang flex h-[40px] bg-[#414141] items-center">
              <CollapseDefault key={'choose-lang'} data={_lang} choose={'lang'} />
              <CollapseDefault key={'choose-theme'} data={ThemeCode} choose={'theme'} />

            </div>
            <div className="wrap-code-editor rounded-lg overflow-hidden">
              <CodeMonaCo key={'code-mona-co'} submit={submit} setRes={setRes} param={param} categories={categories} options={options}/>
            </div>

            <div className="wrap p-2 h-[170px]">
              <div className="inner-wrap bg-[#414141] w-full h-full overflow-y-auto">
                <div className='grid grid-cols-12'>
                  <div className="lg:col-span-8 col-span-8">
                    <div className="inner-wrap px-2">
                      <TabsCustom testCaseBase={problem.test_base} res={res} />
                    </div>
                  </div>
                  <div className='lg:col-span-4 col-span-4'>
                    <div className="inner-wrap grid grid-cols-12 items-center pt-4">
                      <div className="col-span-12 mb-5">
                        <div className="btn-wrap justify-center flex">
                          <Button style={{ color: 'white', background: '#333555', margin: "0 auto" }} onClick={() => { handleSubmit("try") }}>Nộp Thử</Button>
                        </div>

                      </div>
                      <div className="col-span-12 justify-center flex">
                        <div className="btn-wrap">
                          <Button style={{ color: 'white', background: '#333777', margin: "0 auto" }} onClick={() => { handleSubmit("submit") }}>Nộp Và Chấm</Button>
                        </div>

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