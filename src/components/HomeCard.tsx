import {HomeCardData} from '../@types/MyTypes';

const HomeCard: React.FC<HomeCardData> = ({title, description}) => {
  return (
    <div className='bg-main w-1/4'>
      <div className='w-[70%] flex m-auto flex-col'>
        <h1 className='text-lg py-4'>{title}</h1>
        <p className='text-base h-60'>{description}</p>
        <p className='p-2 my-4 bg-buttons rounded-lg hover:bg-buttonsHover'>GO</p>
      </div>
    </div>
  );
};

export default HomeCard;