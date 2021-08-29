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
            setLoading(false);
        }).catch(err => setLoading(false));
    }, []);


    const markRead = async (id) => {
        try {
            await request(`/${pluginId}/mark-read`, {
                method: 'POST',
                body: {
                    id
                }
            })
            setMessages(messages.map(m => m.id === id ? ({ ...m, isUnread: false }) : m));
        } catch (error) {

        }
    }

    return { messages, loading, markRead }
}

export default useMessages;