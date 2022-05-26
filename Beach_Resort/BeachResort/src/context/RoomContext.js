
import createDataContext from "./createDataContext";
import items from '../data';


const roomReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
};


// initDatas
const initDatas = () => {
    const datas = {};

    const rooms = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        
        return { ...item.fields, images, id };
    });

    const sortedRooms = rooms;    
    const featuredRooms = rooms.filter(room => room.featured === true);


    datas.rooms = rooms;
    datas.sortedRooms = sortedRooms;
    datas.featuredRooms = featuredRooms;

    return datas;
} 


export const { Context, Provider } = createDataContext(
    roomReducer, 
    {

    },
    {
        rooms: initDatas().rooms,
        sorted: initDatas().sortedRooms,
        featuredRooms: initDatas().featuredRooms,
        loading: false
    }
);