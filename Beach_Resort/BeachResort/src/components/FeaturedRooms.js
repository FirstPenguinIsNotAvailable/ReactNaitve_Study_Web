

import React, { Component, useContext } from 'react'
import { Context as RoomContext } from '../context/RoomContext';
import Loading from "./Loading";
import Room from './Room';
import Title from './Title';

const FeaturedRooms = () => {
    let {state: {featuredRooms : rooms, loading} } = useContext(RoomContext);

    rooms = rooms.map(room => {
        return <Room key={room.id} room={room}/>
    });

    console.log(rooms, loading);

    return (
        <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
                {loading ? <Loading/> : rooms} 
            </div>
        </section>
      )
}

export default FeaturedRooms;

