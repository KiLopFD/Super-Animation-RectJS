import React, { memo } from 'react'
import { useOutletContext } from 'react-router-dom'


const DescriptionProblem = () => {
  const { description } = useOutletContext()

  return (
    <>
      <div className="font-sans" dangerouslySetInnerHTML={{ __html: description }}>
      </div>
    </>
  )
}

export default memo(DescriptionProblem)