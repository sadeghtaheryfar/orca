import React from 'react';
import { useState,useEffect } from 'react';
import { QueryClient } from 'react-query';
import { useQuery } from 'react-query';

const queryClient = new QueryClient();

const fetchData = async ({path, disk}) => {
    const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
    
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

    const response = await fetch('https://api.theorcasocial.com/v1/files/' + disk + "?path=" + path, requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
};

const ApiImage = (path) => {
    const params = { path: path.path, disk: path.disk };
    const { data: url, isLoading, error } = useQuery(['post', params], () => fetchData(params));
    const type = path.mime_type.split('/');

    return (
        <>
            {type[0] == 'video' ? (
                <video className={path.clas} controls>
                    <source src={url} type={type[0] + '/' + type[1]} />
                </video>
            ) : (
            
                <img src={url} className={path.clas} />
            )}
        </>
    );
};

export default ApiImage;