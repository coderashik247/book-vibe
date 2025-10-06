import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <>
            <Container>
                <Navbar></Navbar>
                <Banner></Banner>
            </Container>
        </>
    );
};

export default Home;