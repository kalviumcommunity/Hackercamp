import React from 'react';
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();

    return (
        <nav className="flex fixed z-50 bg-white w-10/12 top-0  justify-between px-10%  h-20 items-center font-sans w-full">
            <Link to={'/'}>
                <div className="flex gap-1 text-3xl">
                    <div className="bg-blue-600 text-white w-10 h-8  grid justify-center items-center rounded drop-shadow-lg">
                        <span className="text-xl">{'</>'}</span>
                    </div>
                    <p className="text-blue-600 font-bold">HackerCamp</p>
                </div>
            </Link>
            <div className="flex gap-x-4 items-center">
                {isAuthenticated ? (
                    <div>
                        <Link to={'/organise'}>
                            <span className="text-slate-500 font-semibold cursor-pointer  hover:text-blue-600">
                                Organise Hackathons
                            </span>
                        </Link>
                        <span className="text-slate-400">|</span>
                    </div>
                ) : (
                    <div></div>
                )}

                {isAuthenticated ? (
                    <button
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin,
                                },
                            })
                        }
                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={() => loginWithRedirect()}
                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                    >
                        Sign in
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
