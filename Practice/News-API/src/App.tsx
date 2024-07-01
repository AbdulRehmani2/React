import { useState } from 'react';
import ArticleList from './component/ArticleList'

function App() {
  const [isPressed, SetIsPressed] = useState(false)
  const [value, setValue] = useState("")
  const [url, setUrl] = useState("https://api.spaceflightnewsapi.net/v4/blogs/?limit=10");
  const [disabled, setDisabled] = useState(true)

  function handleChange(e: any)
  {
    const value = e.target.value.trim()
    setValue(value)
    value.length > 3 ? setDisabled(false) : setDisabled(true)
  }

  if(!isPressed)
  {
    return (
      <div className='main-container'>
        <h1>Latest News</h1>
        <button onClick={() => SetIsPressed(true)}>Search</button>
        <ArticleList url={url} setUrl={setUrl}></ArticleList>
      </div>
    )
  }
  else
  {
    return (
      <div className='main-container'>
        <h1>Latest News</h1>
        <input type="text" onChange={handleChange} value={value}/>
        <button onClick={() => {SetIsPressed(false); setUrl(`https://api.spaceflightnewsapi.net/v4/blogs/?limit=5&search=${value}`)}} disabled={disabled}>Search</button>
      </div>
    )
  }
}

export default App
