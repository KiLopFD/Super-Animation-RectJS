import React, { useEffect, useMemo, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import TimeLine from '../../components/TimeLine';
import { getLessons } from '../../services/api/utils/getLesson';
import { CommandLineIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useRef } from 'react';
import { useCallback } from 'react';

const Cpp = () => {
    const location = useLocation();
    const { categories, param } = location.state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(0);
    const refShow = useRef(null | HTMLDivElement);
    useEffect(() => {
        setTimeout(() => {
            setLoading(1);

        }, 500);
        getLessons(param, categories, setData)
        if (refShow.current) {
            refShow.current.innerHTML = data["code"];
        }
    }, [param, loading]) // note data is reference type so loop infinity
    // Create Effect Loading
    useEffect(() => {
        setLoading(0)
    }, [param])
    return (
        <>
            {!location.pathname.includes('timeline') ? (
                <div className='w-full'>
                    <div className='font-sans lg:text-lg md:text-lg text-sm pt-10 lg:w-[45rem] md:w-[40rem] sm:w-[35rem] w-[18rem] h-auto bg-gray-700 rounded-3xl mt-10 lg:px-7 md:px-7 sm:px-5 px-3 pb-5 mx-auto'>
                        {loading === 0 ? (<>
                            Loading
                        </>) : (
                            <>
                                {/* Edit Code */}
                                <div>
                                {/* <p className='text-4xl font-semibold font-sans mb-3'>Lập trình Object-Oriented (OOP) trong C++</p>
                                <p className='mb-3'>Lập trình Object-Oriented (OOP) là một mô hình lập trình sử dụng các đối tượng, là các thể hiện của các lớp, để thực hiện các thao tác và tương tác với nhau. Trong C++, bạn có thể đạt được OOP thông qua việc sử dụng các lớp và đối tượng.</p>
                                <p className='text-2xl font-sans font-semibold my-5'>Các lớp</p>
                                <p className='mb-3'>Một lớp là một kế hoạch chi tiết để tạo các đối tượng. Nó xác định cấu trúc (thành viên dữ liệu) và hành vi (hàm thành viên) cho một loại đối tượng. Đây là một ví dụ về một lớp đơn giản:</p>
                                
                                <div className="code my-5"><SyntaxHighlighter language="cpp" style={dracula}>{`class Dog {
public:
    std::string name;
    int age;

    void bark() {
        std::cout << name << " barks!" << std::endl;
    }
};
`}</SyntaxHighlighter></div>
<p className='mb-3'>Lớp <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>Dog</span> này có hai thành viên dữ liệu: <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>name</span> và <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>age</span>, và một thành viên hàm <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>bark</span>. Bạn có thể tạo một đối tượng của lớp này và truy cập các thành viên của nó như sau:
</p>
<div className="code my-5"><SyntaxHighlighter language="cpp" style={dracula}>{`Dog myDog;
myDog.name = "Fido";
myDog.age = 3;
myDog.bark(); // đầu ra: Fido barks!
`}</SyntaxHighlighter></div>
<p className='text-2xl font-sans font-semibold my-5'>Đóng gói</p>
<p className='mb-3'>Đóng gói là khái niệm gói dữ liệu và các hàm hoạt động trên dữ liệu đó trong một đơn vị, chẳng hạn như một lớp. Nó giúp ẩn các chi tiết triển khai bên trong của một lớp và chỉ hiển thị các thông tin và hàm cần thiết. Trong C++, bạn có thể sử dụng các chỉ định truy cập như <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>public</span>, <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>private</span>, và <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>protected</span> để kiểm soát khả năng hiển thị và khả năng truy cập của các thành viên lớp. Ví dụ:
</p>
<div className="code my-5"><SyntaxHighlighter language="cpp" style={dracula}>{`class Dog {
private:
    std::string name;
    int age;

public:
    void setName(std::string n) {
        name = n;
    }

    void setAge(int a) {
        age = a;
    }

    void bark() {
        std::cout << name << " barks!" << std::endl;
    }
};

`}</SyntaxHighlighter>
</div>
<p className='mb-3'>Trong ví dụ này, chúng tôi đã đặt các thành viên dữ liệu <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>name</span> và <span className='bg-gray-500 px-2 rounded-sm text-amber-300'>age</span> ở private và thêm các hàm thành viên công cộng setName và setAge để sửa đổi chúng. Bằng cách này, dữ liệu nội bộ của lớp Dog được bảo vệ và chỉ có thể truy cập thông qua các hàm được cung cấp.
</p> */}

</div>
                                {/* End Edit Code */}
                                <div ref={refShow}></div>
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