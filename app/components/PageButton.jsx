'use client'

import { useContext, useEffect } from 'react'
import { PageContext } from '/app/context.jsx'

import pages from '/app/data/pages'

export default function PageButton({ text }) {
    const [page, setPage] = useContext(PageContext);

    return <div onClick={()=>setPage(text)} className={`cursor-pointer -translate-x-8 text-white text-2xl rounded-full w-64 h-16 flex flex-row items-center justify-center ${page == text? 'bg-dark' : 'hover:bg-mid'}`}><span>{text}</span></div>;
}