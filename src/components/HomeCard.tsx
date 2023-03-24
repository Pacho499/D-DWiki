import {CardDatas} from '../@types/MyTypes';
import { useEffect, useState } from 'react';
import { useAppSelector } from '..';
import { translate } from '../utils/functions';
import { Link } from 'react-router-dom';

const HomeCard: React.FC<CardDatas> = ({title, description}) => {
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
    <div className='bg-main w-1/4 relative mb-4'>
      <div className='w-[70%] flex m-auto flex-col '>
        <h1 className='text-lg py-4 text-center'>{title}</h1>
        <p className='text-base mb-20'>{descriptionTranslate}</p>
        <div className='w-[70%] m-auto p-2 absolute bottom-3 bg-buttons rounded-lg text-center hover:bg-buttonsHover'>
          <Link to={title}>
            <p>GO {title}</p>
          </Link>
          
        </div>
        
      </div>
    </div>
  );
};

export default HomeCard;
