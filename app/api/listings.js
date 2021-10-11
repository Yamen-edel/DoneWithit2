import client from './client';
//this is what we call an API layer. UI component will talk to this layer in order to display the data 
const endpoint = '/listings'
const getListings = () => client.get(endpoint);

export default {
    getListings,
};