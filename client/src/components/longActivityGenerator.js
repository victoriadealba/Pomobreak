const LongActivityGenerator = (props) => {
    const {
        generate,
        activity,
    } = props;

    return (
        <div>
            <button onClick={ generate } class = 'ui button activity' >generate</button>
            <p class ='longact-text'>{activity}</p>
           
        </div>
    );
};

export default LongActivityGenerator