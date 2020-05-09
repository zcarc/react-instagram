import {Carousel} from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import {serverURL} from "../config/url";

const PostImageLayout = ({images}) => {
    return (
        <Carousel showArrows={true} showIndicators={false} showStatus={false} showThumbs={images.length > 1} >
            {images.map((image, index) => {
                return (
                    <div key={image.src+index}>
                        <img src={`${serverURL}/fileslist/${image.src}`}/>
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