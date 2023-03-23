import NavBar from '../components/NavBar';
import HomeCard from '../components/HomeCard';
import {HomeCardsDatas, homeMainText} from '../datas/HomeCardDatas';
import { useAppSelector } from '..';
import { useEffect } from 'react';
import { useState } from 'react';
import { translate } from '../utils/functions';
import Loader from '../components/Loader';
const Home = () => {

  const language = useAppSelector((state) => state.pageSettingsReducer.language)
  const [loading, setLoading] = useState(false)
  const [homeText, setHomeText] = useState({ 
    firstParagraph:homeMainText.firstParagraph,
    secondParagraph : homeMainText.secondParagraph,
    welcome: homeMainText.welcome,
    title: homeMainText.title,
    secondTitle: homeMainText.secondTitle
  })

  useEffect(() => {
    
    const translateText = async() => {
      if(language !== 'en'){
        setLoading(true)
        const first = await translate(homeMainText.firstParagraph, language)
        const second = await translate(homeMainText.secondParagraph, language)
        const welcome = await translate(homeMainText.welcome, language)
        const title = await translate(homeMainText.title, language)
        const secondTitle = await translate(homeMainText.secondTitle, language)
        setHomeText({...homeText, 
          firstParagraph:first, 
          secondParagraph:second, 
          welcome,
          title,
          secondTitle,
        })
        setLoading(false)
      }
    }
    translateText()
  }, [language])

  return (
    <div className='min-h-screen'>
      <NavBar />
      {loading ? 
      <div>
        <Loader/>
      </div>
      : 
      <div className='flex flex-col items-center'>
        <div className='w-8/12 flex flex-col items-center'>
          <h1 className='text-xl text-white my-6'>{homeText.title}</h1>
          <div className='bg-main w-6/12 p-2 rounded-lg text-center text-base'>
            <p>
              {homeText.firstParagraph}
            </p>
            <br />
            <p>
              {homeText.secondParagraph}
            </p>
            <br />
            <p>{homeText.welcome}</p>
          </div>
        </div>
        <div className='w-8/12'>
          <h1 className='text-xl text-white my-6 text-center'>{homeText.secondTitle}</h1>
          <div className='flex justify-between'>
            {HomeCardsDatas.map((data) => {
              return (
                <HomeCard title={data.title} description={data.description} />
              );
            })}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Home;
