import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyDetails = ({ match }) => {
    const [property, setProperty] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/properties/${match.params.id}`)
            .then(res => setProperty(res.data))
            .catch(err => console.error(err));
    }, [match.params.id]);

    return (
        <div>
            {/* Display property details */}
        </div>
    );
};

export default PropertyDetails;
