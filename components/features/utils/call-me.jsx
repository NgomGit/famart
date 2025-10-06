import React from 'react';

const CallMe = ({ phoneNumber = '+1234567890' }) => {
    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            <a
                onClick={handleCall}
                style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Call Me
            </a>
        </div>
    );
};

export default CallMe;