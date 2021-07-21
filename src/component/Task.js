import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Task() {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        axios.get('https://jsonmock.hackerrank.com/api/articles')
            .then(res => {
                console.log(res)
                setWorks(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Author Names...</h1>
            <ul>
                {
                    works.map((work, key) => (
                        <li key={work.id}>{work.author}</li>
                    ))
                }
                {/* {
                    works.map((work, key) => {
                        return <div key={work.id}>{work.author}</div>
                    })
                } */}
            </ul>
        </div>
    )
}

export default Task;