import LeftFilter from '../components/LeftFilter';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { TopicsData } from '../@types/MyTypes';
import {useLocation} from 'react-router-dom';
import {WikiDatas} from '../datas/WikiDetaliDatas';
import Loader from '../components/Loader';
const WikiDetail = () => {
  const [topics, setTopics] = useState<TopicsData>({});
  const [mainDatas, setMainDatas] = useState<Array<any>>([])
  const [loading,setLoading] = useState<Boolean>(true)
  const location = useLocation()
  const wikiSection = location.state
  const texts =  WikiDatas?.[wikiSection].textData;
  const calls = WikiDatas?.[wikiSection].call

  useEffect(() => {
      const fetchTopics = async () => {
        let data: TopicsData = {}
        for (let call in calls){
          const response = await axios.get(`https://www.dnd5eapi.co/api/${calls[call]}`);
          const title = calls[call]
          data[title] =  response.data.results
        }
        const mainDatas: any = []
        for(let topic in data){
          const subtopics = topics[topic]
          for(let subtopic in subtopics){
            const url = subtopics[subtopic].url
            const data = await axios.get(`https://www.dnd5eapi.co${url}`) 
            mainDatas.push(data)
          }
        }
        setMainDatas(mainDatas)
        setTopics(data)
      };
      fetchTopics();
      setLoading(false)

  }, [calls, topics]);

  const renderMainDatas = () => {
    return mainDatas.map((data) => {
      console.log(data)
      return(
        <>
              <h1 id={data.data.name} className='text-white text-lg text-center pt-4 font-bold'>
                {data.data.name}
              </h1>
              <div className='bg-main w-1/2 m-auto p-4 rounded-md text-base'>
                <p>{data.data.desc}</p>
              </div>
            </>
      )
    })
  }
  return (
    <div>
      {loading ? <Loader/> : 
      <>
      <LeftFilter topics={topics} />
      <div className='ml-40 pt-[10vh] min-h-[100vh]'>
        {texts?.map((text) => {
          return (
            <>
              <h1 className='text-white text-lg text-center pt-4 font-bold'>
                {text.title}
              </h1>
              <div className='bg-main w-1/2 m-auto p-4 rounded-md text-base'>
                <p>{text.description}</p>
              </div>
            </>
          );
        })}
        {renderMainDatas()}
      </div>
      </>}
    </div>
  );
};

export default WikiDetail;
