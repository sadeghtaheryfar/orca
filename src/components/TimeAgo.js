import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const TimeAgo = (data) => {
    const formattedTime = formatDistanceToNow(new Date(data.published_at), { addSuffix: true });
    return <span>{formattedTime}</span>;
};

export default TimeAgo;