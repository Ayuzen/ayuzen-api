import { useState, useEffect } from 'react';
import { request } from 'strapi-helper-plugin'
import pluginId from '../pluginId';

function useMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        request(`/${pluginId}`).then(res => {
            setMessages(res);
            console.log("res", res)
            setLoading(false);
        }).catch(err => setLoading(false));
    }, []);

    return { messages, loading }
}

export default useMessages;