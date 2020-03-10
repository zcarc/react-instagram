import {Carousel} from 'react-responsive-carousel';
import PropTypes from 'prop-types';

const PostImageLayout = ({images}) => {
    return (
        <Carousel key={images[0].src + new Date().valueOf()} showArrows={true} showIndicators={false} showStatus={false} showThumbs={true} >
            {images.map((image, index) => {
                return (
                    <div>
                        <img key={image.src+index} src={`http://localhost:8080/fileslist/${image.src}`}/>
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