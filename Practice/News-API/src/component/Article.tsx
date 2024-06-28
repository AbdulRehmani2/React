import { useEffect, useState } from "react";

interface ArticleType{
    id:number,
    title:string,
    url:string,
    summary: string,
    imgUrl:string,
    date:string
}

function Article({id, title, url, imgUrl, date, summary} : ArticleType) {

    useEffect(() => {
        const pattern = /[0-9]{3,4}x[0-9]{3,4}/g
        const match = imgUrl.match(pattern)
        if(match)
        {
            const [height, width] = match[0].split('x')
            setRatio(parseInt(width) / parseInt(height))
        }
    }, [])

    // function setStyle(e: React.SyntheticEvent<HTMLImageElement, Event>)
    // {
    //     const img = e.target as HTMLImageElement
    //     setRatio(img.height / img.width)
    // }

    const [ratio, setRatio] = useState(0)

  return (
    <div className={`article-container ${ratio > 1 && "long-image"}`}>
        <img src={imgUrl} alt=""/>
        <div>
            <h3>{title}</h3>
            <a href={url}>Visit site</a>
        </div>
        <p>{summary}</p>
        <p>{date}</p>
    </div>
  )
}

export default Article