import PropTypes from "prop-types";

const User = ( { id } ) => {
    // console.log('User... id: ', id);
    return <div>123 , {id} </div>;
};

User.propTypes = {
    id: PropTypes.number.isRequired,
};

User.getInitialProps = (context) => {
    // console.log('User.getInitialProps... context: ', context);
    // console.log('User.getInitialProps... context.query: ', context.query);
    // console.log('User.getInitialProps... context.query.id: ', context.query.id);

    return { id: parseInt(context.query.id) };
};

export default User;