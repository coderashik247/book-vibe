import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import Banner from '../../components/Banner/Banner';
import { Outlet } from 'react-router';
import Books from '../Books/Books';

const Home = () => {
    return (
        <>
            <Container>
                <Banner></Banner>
                <Books></Books>
            </Container>
            
        </>
    );
};

export default Home;