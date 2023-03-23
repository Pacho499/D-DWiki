import NavBar from '../components/NavBar';
import HomeCard from '../components/HomeCard';
import {HomeCardsDatas} from '../datas/HomeCardDatas';
const Home = () => {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <div className='flex flex-col items-center'>
        <div className='w-8/12 flex flex-col items-center'>
          <h1 className='text-xl text-white my-6'>Welcome Adventurers</h1>
          <div className='bg-main w-6/12 p-2 rounded-lg text-center text-base'>
            <p>
              Hello adventurers, within this site you will find everything that
              can help you in your intrepid campaigns from information on
              classes and races to spells.
            </p>
            <br />
            <p>
              And it doesn't end here, in fact you will also have the
              possibility to register and consult campaigns created by players
              to get ideas or play them directly, also giving the possibility to
              describe your own campaign so as to be able to provide old and new
              players with fantastic stories and adventures.
            </p>
            <br />
            <p>Welcome to the D&D fanWiki</p>
          </div>
        </div>
        <div className='w-8/12'>
          <h1 className='text-xl text-white my-6 text-center'>Choose what you need</h1>
          <div className='flex justify-between'>
            {HomeCardsDatas.map((data) => {
              return (
                <HomeCard title={data.title} description={data.description} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
