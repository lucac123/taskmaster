'use client'

export default function SignIn(props) {
  return (<div className="w-full h-full flex justify-center items-center">
    <div className="text-white w-96 h-64 bg-mid rounded-3xl flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="text-3xl">Sign In</span>
        <span className="text-font-mid text-1xl">Use your Google account</span>
      </div>
      <button className="bg-dark rounded-full p-4 pt-2 pb-2" onClick={props.action}>Sign in with your Google account</button>
    </div>
  </div>)
}
