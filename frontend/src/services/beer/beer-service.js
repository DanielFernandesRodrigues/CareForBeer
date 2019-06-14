import ApiService from '../api-service';

const apiService = ApiService('/temperature');
export default function BeerService() {
    
    async function getBeerTemperatures() {
        return apiService.callApi()
        .then(res => {
            return JSON.parse(res);
        })
        .catch(err => {
            console.log('err', err);
            return [];
        });
    };

    return Object.freeze({
        getBeerTemperatures
    });
}
