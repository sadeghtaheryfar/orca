import React from 'react';
import { useIsFetching } from 'react-query';

const ProgressBar = () => {
    const isFetching = useIsFetching();

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: isFetching ? '4px' : 0, backgroundColor: 'blue', zIndex: 9999, transition: 'height 0.3s' }}>
        {/* Additional styling or content for the progress bar can be added here */}
        </div>
    );
};

export default ProgressBar;
