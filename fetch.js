const fetch_url = async ({ url, method, headers, body }) => {
    try {
        var requestOptions = {
            method: method,
            headers: headers,
            body: body,
            redirect: 'follow'
        };
        const source = await fetch(url, requestOptions)
        const response = await  source.text()
        console.log(response);
        return {
            status: true,
            message: response,
            error: null
        }

    } catch (error) {
        console.log(error);
        return {
            status: false,
            message: null,
            error: error
        }
    }
}


const get_refresh = ({ access_token }) => {

}


module.exports = { fetch_url }