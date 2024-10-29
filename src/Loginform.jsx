import React, { useState } from 'react';
import Homepage from './Homepage';
import Errorpage from './Errorpage';

const Loginform = () => {
    const [uid, setUid] = useState("");
    const [upass, setUpass] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleUidText = (evt) => {
        setUid(evt.target.value);
    };

    const handleUpassText = (evt) => {
        setUpass(evt.target.value);
    };

    const handleLoginButton = () => {
        if (uid === "pankaj" && upass === "1234") {
            setIsAuthenticated(true);
            setIsError(false);
        } else {
            setIsError(true);
            setIsAuthenticated(false);
        }
    };

    if (isAuthenticated) {
        return <Homepage />;
    }

    if (isError) {
        return <Errorpage />;
    }

    return (
        <div className='bg-blue-700 h-screen w-full flex items-center justify-center'>
            <div className='bg-white h-auto w-[50%] p-5 flex flex-col items-center justify-center gap-5 rounded'>
                <h2 className='text-5xl font-bold text-blue-700'>User login form</h2>
                <table className='w-[80%] mx-auto p-6 rounded-lg space-y-6'>
                    <tbody>
                        <tr>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">User Name</label>
                            <td><input type="text" onChange={handleUidText} className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300' /></td>
                        </tr>
                        <tr>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <td><input type="password" onChange={handleUpassText} className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300' /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={handleLoginButton} className='bg-green-500 hover:bg-green-600 text-white font-bold mt-5 py-2 px-4 rounded shadow-2lg hover:shadow-xl transition-all duration-300'>Login</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Loginform;
