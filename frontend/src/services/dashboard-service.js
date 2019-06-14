import ApiService from './api-service';

export default function BeerTemperaturesService() {
    const apiService = ApiService('/temperatures');

    getBeerTemperatures = async () => {
        await apiService.callApi()
            .then(res => {
                return JSON.parse(res);
            })
            .catch(err => {
                console.log('err', err)
                return err;
            });
    };
}