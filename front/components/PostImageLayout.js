import {Carousel} from 'react-responsive-carousel';
import PropTypes from 'prop-types';

const PostImageLayout = ({images}) => {
    return (
        <Carousel showArrows={true} showIndicators={false} showStatus={false} showThumbs={images.length > 1} >
            {images.map((image, index) => {
                return (
                    <div key={image.src+index}>
                        <img src={`http://localhost:8080/fileslist/${image.src}`}/>
                    </div>
                );
            })}
        </Carousel>
    );

};

PostImageLayout.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
};

export default PostImageLayout;