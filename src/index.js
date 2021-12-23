import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, BrowserRouter, Route} from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddressBook from './routes/AddressBook';
import AddressDetails from './routes/AddressDetails';
import Orders from "./routes/Orders";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route
                    index
                    element={
                        <>
                            <h2>Welcome in your account.</h2>
                            <p>Please use the navigation above to see Address book or your orders.</p>
                        </>
                    }
                />
                <Route path="address" element={<AddressBook />}>
                    <Route
                        index
                        element={
                            <p>Select an address.</p>
                        }
                    />
                    <Route path=":addressId" element={<AddressDetails />} />
                </Route>
                <Route path="orders" element={<Orders/>}/>
            </Route>
            <Route
                path="*"
                element={
                    <main>
                        <p style={{padding: '30px', textAlign: 'center'}}>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
