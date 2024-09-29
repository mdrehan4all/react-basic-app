import { useEffect, useState } from "react";

function Home() {

    const [data, setData] = useState(null);

    useEffect(() => {

    }, []);

    function callMe() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }

    return (<>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
                    <button className='btn btn-primary' onClick={callMe}>Click me</button>
                </div>
            </div>
        </div>
    </>)
}

export default Home;