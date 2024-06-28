import { useEffect, useState } from "react"
import Article from "./Article"

interface ArticleType{
    id: number,
    title: string,
    url: string,
    summary: string,
    imgUrl: string,
    date: string
}

function ArticleList() {
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(result => {AddData(result); url = result.next; setIsLoading(false)})
    }, [])

    const [isLoading, setIsLoading] = useState(true)

    let url = "https://api.spaceflightnewsapi.net/v4/blogs/?limit=10";
    const [data, setData] = useState<ArticleType[]>([])

    function AddData({results}: any)
    {
        const newData = results.map((element : any) => {
                return {
                id: element.id,
                title: element.title,
                url: element.url,
                summary: element.summary,
                imgUrl: element.image_url,
                date: element.published_at
            }
        })
        newData.filter((element:ArticleType, index:number, self:ArticleType[]) => {self.indexOf(element) === index})
        setData([...data, ...newData])
    }
  return (
    <div>
        {!isLoading ? data.map((element: ArticleType) => {
            console.log(data);
            return <Article key={element.id} id={element.id} title={element.title} url={element.url} imgUrl={element.imgUrl} summary={element.summary} date={element.date}></Article>
        }) : <h1>Loading...</h1>}
    </div>
  )
}

export default ArticleList