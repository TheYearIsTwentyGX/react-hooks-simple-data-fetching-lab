import React, { useState, useEffect } from 'react';

function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => { console.log(data); setImage(data.message);});
    }, []);

    return (
        <div>
            {(image == null ? <p>Loading...</p> : <img src={image} alt="A Random Dog"/>)}
        </div>
    )
}

export default App;