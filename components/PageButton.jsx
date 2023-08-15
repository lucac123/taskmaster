import { useContext } from 'react'
import { LayoutContext } from '/app/LayoutContext.jsx'

export default function PageButton({ text }) {
    const [layoutState, setLayoutState] = useContext(LayoutContext);
    return <div onClick={()=>setLayoutState(text)} className={`cursor-pointer -translate-x-8 text-white text-2xl rounded-full w-64 h-16 flex flex-row items-center justify-center ${layoutState == text? 'bg-dark' : 'hover:bg-mid'}`}><span>{text}</span></div>;
}