import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState';

const Home = ({ mylist, trends, originals }) => {
    // const initialState = useInitialState(API);
    // return initialState.length === 0 ? <h1>Loading...</h1> : (
    return (
        <>
            <Header />
            <Search isHome />
            {mylist.length > 0 && (
                <Categories title="Mi lista de videos:">
                    <Carousel>
                        {mylist.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item}
                                islist
                            />
                        )}
                    </Carousel>
                </Categories>
            )}
        
            <Categories title="Tendencias:">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>   
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales del Platzi Video:">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>   
                    )}
                </Carousel>
            </Categories>
        </>

        );
    }

const mapStateToProps = state => {
    return {
       mylist: state.mylist,
       trends: state.trends,
       originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);