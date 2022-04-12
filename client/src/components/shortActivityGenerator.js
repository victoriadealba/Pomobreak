import {react} from 'react'

const ShortActivityGenerator = (props) => {
    const {
        generate,
        activity,
    } = props;

    return (
        <div>
            <button onClick={ generate }>generate</button>
            <h2>text:</h2>
            <pre>{ activity }</pre>
        </div>
    );
};

export default ShortActivityGenerator
