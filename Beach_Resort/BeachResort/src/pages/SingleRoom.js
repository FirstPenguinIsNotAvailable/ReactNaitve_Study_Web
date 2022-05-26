import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link, useNavigate } from 'react-router-dom';
import { Context as RoomContext } from '../context/RoomContext';
import { withRouter } from '../methods/withRouter';

const SingleRoom = ({ navigate }) => {
  console.log("naviage", navigate);

  return (
    <>
    </>
  )
}

export default withRouter(SingleRoom);

// export default class SingleRoom extends Component {
//   constructor(){

//   }

//   componentDidMount(){
//     const getSearch = () => {
//       const { search } = useLocation();
//       console.log(search);
//     }

//     getSearch();
//   }
  
//   render() {
//     return (
//       <div>hello from single room page</div>
//     )
//   }
// }
