import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
      <h1>@Kukuruznik presset</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
