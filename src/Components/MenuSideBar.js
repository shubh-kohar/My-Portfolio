import React from 'react'

function MenuSideBar() {
  return (
    <div className="flex flex-col bg-gray-100 p-5 items-start w-1/6">
    {/* <h1 className="flex flex-col font-bold text-xl">
      <span>
      ShubhaJeet
      </span>
       <span>Kohar</span></h1> */}
    {["Home", "About", "Projects", "Resume"].map((e) => (
      <p key={e} className="p-2 text-xl font-semibold">
        {e}
      </p>
    ))}
  </div>
  )
}

export default MenuSideBar