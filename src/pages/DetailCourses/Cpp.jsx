import React, { useEffect, useMemo, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import TimeLine from '../../components/TimeLine';
import { getLessons } from '../../services/api/getLesson';
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Cpp = () => {
    const location = useLocation();
    const { categories, param } = location.state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(0);


    useMemo(() => {
        setTimeout(() => {
            setLoading(1);
        }, 5000);
        getLessons(param, categories, setData)


    }, [])

    return (
        <>

            {!location.pathname.includes('timeline') ? (
                <div className='w-full'>
                    <div className='pt-10 lg:w-[45rem] w-auto h-auto bg-gray-700 rounded-3xl mt-10 px-7 pb-5 mx-auto'>
                        {loading === 0 ? (<>
                            Loading
                        </>) : (
                            <>
                                {/* <div>
                                    <p className='text-4xl font-semibold font-sans mb-3'>Thiết lập môi trường</p>
                                    <p className='mb-3'>Setting up C++ requires a few steps, including installing a compiler, configuring an Integrated Development Environment (IDE), and creating a new C++ project.</p>
                                    <p className='text-2xl font-sans font-semibold my-5'>1. Cài đặt trình biên dịch</p>
                                    <p className='mb-3'>Cần có trình biên dịch để chuyển mã C++ sang ngôn ngữ máy. Một số trình biên dịch C++ phổ biến bao gồm:</p>
                                    <ul className='list-disc pl-8'>
                                        <li className='mb-3'>GCC (Bộ sưu tập trình biên dịch GNU) cho Linux và macOS</li>
                                        <li className='mb-3'>MinGW (GNU tối giản cho Windows) cho Windows</li>
                                        <li className='mb-3'>Microsoft Visual C ++ cho Windows</li>
                                    </ul>
                                    <p className='mb-3'>Để cài đặt trình biên dịch, chỉ cần làm theo hướng dẫn được cung cấp bởi các trang web tương ứng.</p>

                                    <p className="text-2xl font-sans font-semibold my-5">2. Cấu hình IDE</p>
                                    <p className='mb-3'>IDE là một ứng dụng phần mềm cung cấp các phương tiện để lập trình, chẳng hạn như chỉnh sửa mã, gỡ lỗi và xây dựng. Một số IDE C++ phổ biến bao gồm:</p>
                                    <ul className='list-disc pl-8'>
                                        <li className='mb-3'><a href='https://code.visualstudio.com/' className='underline-offset-4 underline'>Visual Studio</a> (Windows, macOS)</li>
                                        <li className='mb-3'><a href='https://www.eclipse.org/downloads/' className='underline-offset-4 underline'>Eclipse</a> (Windows, macOS, Linux)</li>
                                        <li className='mb-3'><a href='https://www.codeblocks.org/' className='underline-offset-4 underline'>Code::Blocks</a> (Windows, macOS, Linux)</li>
                                    </ul>
                                    <p className='mb-3'>Sau khi tải xuống và cài đặt một IDE, bạn có thể cần định cấu hình nó để sử dụng trình biên dịch đã cài đặt. Kiểm tra tài liệu của IDE tương ứng để biết hướng dẫn về cách thực hiện việc này.</p>
                                    <p className="text-2xl font-sans font-semibold my-5">3. Tạo một dự án C++ mới</p>
                                    <p className="mb-3">Khi bạn đã thiết lập IDE và trình biên dịch, bạn có thể tạo một dự án C++ mới và bắt đầu viết mã. Nói chung, hãy làm theo các bước sau để tạo một dự án C++ mới:</p>
                                    <ul className='list-disc pl-8'>
                                        <li className='mb-3'>Mở IDE và tạo một dự án mới.</li>
                                        <li className='mb-3'>Chọn loại dự án (Ứng dụng C++ hoặc Ứng dụng bảng điều khiển).</li>
                                        <li className='mb-3'>Chỉ định tên dự án và vị trí.</li>
                                        <li className='mb-3'>Hãy để IDE tạo các tệp main.cpp và xây dựng (chẳng hạn như Makefile hoặc CMakeLists.txt) cho bạn.</li>
                                    </ul>
                                    <p className="text-2xl font-sans font-semibold my-5">Ví dụ: Hello World trong C++</p>
                                    <p className="mb-3">Tạo một tệp mới có tên main.cpp trong dự án của bạn và bao gồm mã này:</p>
                                    <div className="code my-5">
                                        <SyntaxHighlighter language="cpp" style={dracula} wrapLines={true}>
                                            {`#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`}
                                        </SyntaxHighlighter>
                                    </div>

                                    <p className="mb-3">Sau đó, làm theo hướng dẫn của IDE để xây dựng và chạy chương trình của bạn. Bạn sẽ thấy “Hello, World!” hiển thị trong bảng điều khiển.</p>
                                    <p className='text-2xl font-sans font-semibold my-5'>Tóm lại</p>
                                    <p className="mb-3">Thiết lập C++ bao gồm:</p>
                                    <ul className='list-disc pl-8'>
                                        <li className='mb-3'>Cài đặt trình biên dịch (ví dụ: GCC, MinGW hoặc MSVC)</li>
                                        <li className='mb-3'>Định cấu hình IDE (ví dụ: Visual Studio, Eclipse hoặc Code::Blocks)</li>
                                        <li className='mb-3'>Tạo một dự án C++ mới và viết mã</li>
                                    </ul>
                                    <p className="mb-3">Bằng cách làm theo các bước này, bạn sẽ sẵn sàng bắt đầu phát triển các ứng dụng C++</p>
                                </div> */}
                                    {<div dangerouslySetInnerHTML={{ __html: data["code"] }}/> }
                            </>
                        )}

                    </div>
                </div>
            ) : (<>
                <TimeLine />
            </>)}

        </>

    )
}

export default Cpp