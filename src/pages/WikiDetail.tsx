import LeftFilter from '../components/LeftFilter';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {topicType} from '../@types/apiTypes/classType';
import {useLocation} from 'react-router-dom';
import {WikiDatas} from '../datas/WikiDetaliDatas';
const WikiDetail = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [topics, setTopics] = useState<Array<topicType>>([]);
  const location = useLocation()
  const wikiSection = location.state
  const texts =  WikiDatas?.[wikiSection].textData;
  useEffect(() => {
    if(WikiDatas?.[wikiSection].call !== ''){
      const fetchTopics = async () => {
        const data = await axios.get(`https://www.dnd5eapi.co/api/${WikiDatas?.[wikiSection].call}`,
        );
        setTopics(data.data.results);
        setShowFilter(true);
      };
      fetchTopics();
    }

    // const fetchDatas = async () => {
    //     console.log('topics:',topics)
    //     for(let topic in topics){
          
    //        const data = await axios.get(`https://www.dnd5eapi.co/api/classes/${topics[topic].index}`) 
    //        console.log('data:',data.data)
    //     }
    // }
    // fetchDatas()
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
