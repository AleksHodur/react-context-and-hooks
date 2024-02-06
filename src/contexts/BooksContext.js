import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {

    const [books, setBooks ] = useState([
        {title: 'the way of king', id: 1},
        {title: 'the name of the wind', id: 2},
        {title: 'the final empire', id: 3}
    ]);
    return ( 
        <BooksContext.Provider value={{books}}>
            {props.children}
        </BooksContext.Provider>
     );
}
 
export default BooksContextProvider;
