export default function ApiService(url) {
    async function callApi () {
        const response = await fetch(url);
        if (response.status !== 200) throw Error(response.statusText);
        const body = await response.json();
        return body;
      };

    return Object.freeze({
        callApi
    });
}