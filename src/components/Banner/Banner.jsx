import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-start py-10 bg-stone-100 rounded-xl'>
            <div className='flex-1 flex justify-center items-start flex-col ml-[100px]'>
                <h2 className='fontPlayFair mt-[100px] leading-[60px] text-6xl font-bold'>
                    Books to freshen up <br /> your bookshelf
                </h2>
                <div className='mt-8'>
                    <button className=" text-white font-bold bg-green-500 rounded-xl px-5 py-3">View The List</button>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center flex-col'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;