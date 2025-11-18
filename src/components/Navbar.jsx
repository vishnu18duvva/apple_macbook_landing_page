import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple Logo" className="w-8 h-8" />

                <ul>
                    {navLinks.map(({label}) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>


                <div>
                    <button>
                        <img src="/search.svg" alt="Search"/>
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
