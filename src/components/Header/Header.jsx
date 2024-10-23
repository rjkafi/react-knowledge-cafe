import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 md:flex  max-w-6xl m-auto border-b-2  mb-5'>
            <h1 className="text-4xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;