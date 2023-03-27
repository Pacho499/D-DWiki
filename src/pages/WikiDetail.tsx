import LeftFilter from '../components/LeftFilter';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {topicType} from '../@types/apiTypes/classType';
import {useParams} from 'react-router-dom';
import {WikiDatas} from '../datas/WikiDetaliDatas';
const WikiDetail = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [topics, setTopics] = useState<Array<topicType>>([]);
  const {wikiSection} = useParams();
  const texts =
    wikiSection !== undefined ? WikiDatas?.[wikiSection].textData : null;
  useEffect(() => {
    const fetchTopics = async () => {
      const data = await axios.get(`https://www.dnd5eapi.co/api/${
          wikiSection !== undefined ? WikiDatas?.[wikiSection].call : ''
        }`,
      );
      if (wikiSection !== undefined && WikiDatas?.[wikiSection].call !== '') {
        setTopics(data.data.results);
        setShowFilter(true);
      }
    };
    const fetchDatas = async () => {
        console.log(topics)
        for(let topic in topics){
           const data = await axios.get(`https://www.dnd5eapi.co/api/classes/${topics[topic].index}`) 
           console.log(data.data)
        }
    }
    fetchTopics();
    fetchDatas()
  }, []);
  return (
    <div>
      {showFilter && <LeftFilter topics={topics} />}
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
      </div>
    </div>
  );
};

export default WikiDetail;
