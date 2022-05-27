import CircularProgress from '@mui/material/CircularProgress';

import useFetch from './useFetch';

export default function Fetch({
    url, 
    renderSuccess, 
    loadingFallback =  
    <CircularProgress />,
    renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>
}){
    const { data, loading, error } = useFetch(url);
    if (loading) return loadingFallback;
    if (error) return renderError(error);
    return renderSuccess({data});
}