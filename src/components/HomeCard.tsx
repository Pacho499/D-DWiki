import {HomeCardData} from '../@types/MyTypes';
import { useEffect, useState } from 'react';
import { useAppSelector } from '..';
import { translate } from '../utils/functions';

const HomeCard: React.FC<HomeCardData> = ({title, description}) => {
  const [descriptionTranslate, setDescriptionTranslate] = useState(description)
  const language = useAppSelector((state) => state.pageSettingsReducer.language)

  useEffect(() => {
    const translateText = async() => {
      const data = await translate(description, language)
      setDescriptionTranslate(data)
    }
    translateText()
  }, [language])
  
  return (
    <div className='bg-main w-1/4 relative mb-8'>
      <div className='w-[70%] flex m-auto flex-col '>
        <h1 className='text-lg py-4 text-center'>{title}</h1>
        <p className='text-base mb-20'>{descriptionTranslate}</p>
        <p className='absolute bottom-0 left-10 p-2 my-4 bg-buttons rounded-lg text-center hover:bg-buttonsHover'>GO {title}</p>
      </div>
    </div>
  );
};

export default HomeCard;
