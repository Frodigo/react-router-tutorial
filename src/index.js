import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, BrowserRouter, Route} from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddressBook from './routes/AddressBook';
import AddressDetails from './routes/AddressDetails';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="address" element={<AddressBook />}>
                    <Route path=":addressId" element={<AddressDetails />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
