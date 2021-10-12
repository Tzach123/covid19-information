import React, { useMemo } from 'react'
import PropTypes from 'prop-types';

const Error = ({ component = '', errorText = '' }) => {

    const error = useMemo(() => {
        const ifComponentProp = component && `${component}: `
        return '! ' + ifComponentProp + errorText
    }, [component, errorText]);

    return (
        <div className='error'>
            {error}
        </div>
    )
}

Error.propTypes = {
    errorText: PropTypes.element.isRequired
};

export default Error
