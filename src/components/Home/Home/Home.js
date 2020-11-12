import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Card></Card>
        </div>
    );
};

export default Home;