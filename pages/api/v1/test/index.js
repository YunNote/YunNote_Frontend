const axios = require('axios');
const API_HOST = process.env.API_HOST;

export default async (req, res) => {

    try {
        const response = await axios.get(API_HOST + "/api/v1/test");
        await res.json(response.data)
    } catch (e) {

        res.json({
            statusCode:4004,
            message : "API 서버와 통신할 수 없습니다."
        })
    }
}
