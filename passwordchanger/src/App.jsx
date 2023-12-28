import { useState, useCallback, useEffect , useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");

 
  //useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) str += "1234567890";
    if (charsAllowed) str += "~!@#$%^&*()_-/+=[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numsAllowed, charsAllowed, setPassword]);

  /* useCallback hook is used for memoization (to keep in cashe the attributes u pass) in other words it is used for optimization not calling the fn. here we call using the useEffect hook */

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText (password)
  },[password])

  /* Note that: Window object is only accesible here because we are using "core react" , if we make the same in 'next.js' then since it is server-side rendering (on server) there is no window object (not accesible)  */

  useEffect(() => {
    passwordGenerator();
  }, [length, numsAllowed, charsAllowed]);

  return (
    <div className="w-1/2 max-w-full text-xl mx-auto shadow-md rounded-xl py-4 px-4 my-12 bg-slate-800 text-orange-500">
      <h1 className="text-white text-3xl mb-8 text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden my-3">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-3 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordtoClipboard}
        className="outline-none bg-blue-700 hover:bg-blue-900 px-4 py-0.5 text-white font-medium">Copy</button>
      </div>

      <div className="flex overflow-hidden my-2 py-2 px-4 gap-6 ">
        <div className="flex flex-wrap  gap-x-3 items-center">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name="length"
            id="length"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex flex-wrap gap-x-2 items-center py-auto ">
          <input
            type="checkbox"
            checked={numsAllowed}
            onChange={() => {
              setNumsAllowed((prev) => !prev);
            }}
            name="number"
            id="number"
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex flex-wrap gap-x-2 items-center">
          <input
            type="checkbox"
            checked={charsAllowed}
            onChange={() => {
              setCharsAllowed((prev) => !prev);
            }}
            name="charInput"
            id="charInput"
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;