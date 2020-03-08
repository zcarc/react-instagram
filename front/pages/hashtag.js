import PropTypes from 'prop-types';

const Hashtag = ( { tag } ) => {
    // console.log('Hashtag... pageProps: ', pageProps);
    // console.log('Hashtag... tag: ', tag);
    return <div>123 {tag} </div>;
};

Hashtag.propTypes = {
    tag: PropTypes.string.isRequired,
};

Hashtag.getInitialProps = (context) => {
    // console.log('Hashtag.getInitialProps... context: ', context);
    // console.log('Hashtag.getInitialProps... context.query: ', context.query);
    // console.log('Hashtag.getInitialProps... context.query.tag: ', context.query.tag);

    return { tag: context.query.tag };
};

export default Hashtag;