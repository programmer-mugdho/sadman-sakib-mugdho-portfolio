import React from 'react';

const NotFound = () => {
    return (
        <div style={{ display: "grid", placeItems: 'center', height: '100vh', color:'white', textAlign:'center' }}>
            <div>
                <h1 style={{fontSize:'8vw'}}>404 Not Found</h1>
                <h3>Bad Request . Nothing Here</h3>
            </div>
        </div>
    );
};

export default NotFound;