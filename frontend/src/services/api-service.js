export default function ApiService(url) {
    async function callApi () {
        const response = await fetch(url);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      };

    return Object.freeze({
        callApi
    });
}