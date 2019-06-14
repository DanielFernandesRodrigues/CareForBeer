import ApiService from '../api-service';

const apiService = ApiService('/temperature');
export default function BeerService() {
    
    async function getBeerTemperatures() {
        return apiService.callApi()
        .then(res => {
            return JSON.parse(res);
        });
    };

    return Object.freeze({
        getBeerTemperatures
    });
}
