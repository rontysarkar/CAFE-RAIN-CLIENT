import PropTypes from 'prop-types'

const GalleryCard = ({item}) => {
    return (
        <div className='relative group hover:opacity-80 '>
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={item.image_url}/>
            <div className='absolute left-2 bottom-6 text-white hidden group-hover:block  '>
                <h1 className='text-lg font-bold text-orange-600  '>{item.user_name}</h1>
                <p >{item?.feedback}</p>
            </div>
        </div>
    );
};

export default GalleryCard;

GalleryCard.propTypes ={
    item:PropTypes.object
}