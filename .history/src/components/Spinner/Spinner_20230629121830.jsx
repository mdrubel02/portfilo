import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';


const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div>
            <div className="sweet-loading">
                <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
                <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

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