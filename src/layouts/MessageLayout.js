import React, { useState, useEffect } from 'react';
import ClayLoadingIndicator from '@clayui/loading-indicator'
import axios from 'axios';
import MessageTable from '../components/MessageTable';


const MessageLayout = () => {
    const [isLoading, setLoading] = useState(false);
    const [messages, setMessages] = useState([0]);

    function getAuthToken() {
        let username = 'test@liferay.com';
        let password = 'test';
      
        return 'Basic ' + window.btoa(username + ":" + password);
    }
    
    useEffect(() => {
        console.log('React Hook to get Form data has been called')
        const fetchData = () => {           
            setLoading(true);
            console.log('is loading')
            let auth = getAuthToken();
      
            const result = axios( {
                url: `https://webserver-lctexcellus-prd.lfr.cloud/o/headless-form/v1.0/sites/40450/forms`,
                method: 'get',
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': auth
                }
            })
            .then(response => {
                setMessages(response.data.items);
                setLoading(false);
                return response.data;
            })
            .catch(function(error) {
                    console.warn('Error while trying to fetch accounts? ' + error);
            });
      
        };
      
        fetchData();

      }, []);
        
    return (
        <>
            {isLoading 
                ?  <ClayLoadingIndicator small/>
                : <MessageTable messages={messages}/>
            }
        </>
    )
}

export default MessageLayout;