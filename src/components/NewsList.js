import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ClayLoadingIndicator from '@clayui/loading-indicator'

const NewsList = ({items}) => {

    console.log('items ', items)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true)
            let auth = getAuthToken();

            const result = axios( {
                url: `http://localhost:8080/o/headless-delivery/v1.0/content-structures/168098/structured-contents?pageSize=${items}`,
                method: 'get',
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': auth
                }
            })
            .then( response => {
                setData(response.data);
                console.log("news feed response =>", response.data)
                setLoading(false)
            })
        };

        fetchData();
    }, []);


    function getAuthToken()
    {
        let username = 'bruno';
        let password = 'bruno';

        return 'Basic ' + window.btoa(username + ":" + password);
    }

    if ( loading )
        return(<ClayLoadingIndicator/>)
    else {
        return(
            <React.Fragment>
                {
                    data.items.map((item, key) => {
                        console.log("news: ", item)

                        return(
                            <div className="card mt-3" key={item.id}>
                                <img src={ `http://localhost:8080/${item.contentFields[2].value.document.contentUrl}` } className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <div className="text-right">
                                        <a href="#" className="btn btn-outline-primary">
                                            Read More >>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </React.Fragment>
        )
    }
}

export default NewsList