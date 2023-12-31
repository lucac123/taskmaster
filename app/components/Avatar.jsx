import { useState } from 'react'

export default function Avatar({ action }) {
    const [dropdownFlag, setDropdownFlag] = useState(false)

    const dropdown = <button onClick={action} className="bg-mid w-24 h-1/2 top-1/4 -right-[5.5rem] absolute text-font-dark flex items-center justify-center rounded-r-full">Log Out</button>

    return (
        <div onMouseEnter={() => setDropdownFlag(true)} onMouseLeave={(() => setDropdownFlag(false))} className="cursor-pointer relative">
            <svg className="relative z-10" width="60" height="60" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-dark" fillRule="evenodd" clipRule="evenodd" d="M57.9041 58.1784C64.1376 52.0151 68 43.4586 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 43.4586 3.86236 52.0151 10.0959 58.1784C12.7978 50.4145 20.1943 44.8438 28.8996 44.8438H39.1004C47.8057 44.8438 55.2022 50.4145 57.9041 58.1784ZM44.1015 35.3263C41.4224 37.9987 37.7888 39.5 34 39.5C30.2112 39.5 26.5776 37.9987 23.8985 35.3263C21.2194 32.6539 19.7143 29.0293 19.7143 25.25C19.7143 21.4707 21.2194 17.8461 23.8985 15.1737C26.5776 12.5013 30.2112 11 34 11C37.7888 11 41.4224 12.5013 44.1015 15.1737C46.7806 17.8461 48.2857 21.4707 48.2857 25.25C48.2857 29.0293 46.7806 32.6539 44.1015 35.3263Z" fill="white"/>
            </svg>
            {dropdownFlag && dropdown}
        </div>)
}