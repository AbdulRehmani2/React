import { useEffect, useState } from "react"
import Article from "./Article"
import { uniq }from 'lodash'
import axios from "axios"


interface ArticleType{
    id: number,
    title: string,
    url: string,
    summary: string,
    imgUrl: string,
    date: string
}

interface ArticleList{
    url: string,
    setUrl: React.Dispatch<React.SetStateAction<string>>
}

function ArticleList({ url, setUrl }: ArticleList) {

    const [isLoading, setIsLoading] = useState(true)
    let prevUrl = "https://api.spaceflightnewsapi.net/v4/blogs/?limit=10";

    useEffect(() => {
        // function fetchData()
        // {
        //     flag = true
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(result => {AddData(result); prevUrl = result.next; setIsLoading(false); flag = false})
        // }
        async function fetchData()
        {
            flag = true
            const response = await axios.get(url)
            AddData(response.data)
            prevUrl = response.data.next
            setIsLoading(false)
            flag = false
        }
        !flag && fetchData();
    }, [url])

    useEffect(() => {
        function handleScroll()
        {
            if(document.body.offsetHeight < scrollY + innerHeight)
            {
                window.scrollTo(0, scrollY)
                setUrl(prevUrl)
            }
        }

        document.addEventListener('scroll', handleScroll);

        return () => document.removeEventListener('scroll', handleScroll);
    }, [])


    let flag = false
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

        const filteredData = uniq<ArticleType>(newData);

        setData(prevData => [...prevData, ...filteredData]);
    }
  return (
    <div>
        {!isLoading ? data.map((element: ArticleType) => {
            return <Article key={element.id} id={element.id} title={element.title} url={element.url} imgUrl={element.imgUrl} summary={element.summary} date={element.date}></Article>
        }) : <h1>Loading...</h1>}
    </div>
  )
}

export default ArticleList