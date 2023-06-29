import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';


const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "#2eca7f",
};

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div>
            <div className="sweet-loading">
                <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    );
};

export default Spinner;