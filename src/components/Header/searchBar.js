import React, { Fragment } from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <Fragment>
                <input
                    id="search"
                    autoComplete="off"
                    className="w-full py-2 text-grey-darkest pl-4 pr-10 rounded focus:border-grey-light"
                    placeholder="Search..."
                    type="text"
                />
                <div className="flex items-center">
                    <svg
                        className="fill-current text-grey-dark inline-block h-4 w-4 -ml-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                </div>
            </Fragment>
        );
    }
}

export default SearchBar;
