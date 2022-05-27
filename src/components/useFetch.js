import React, { useState, useEffect } from 'react';
// import axios from 'axios'

export default function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        if (!url) return;
        fetch(url)
            .then(data => data.json())
            .then(setData)
            .then(setLoading(false))
            .catch(setError)
    }, [url])
    return { data, loading, error }
}