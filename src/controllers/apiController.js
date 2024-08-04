const APP_NAME = process.env.APP_NAME;
const APP_VERSION = process.env.APP_VERSION;

exports.getApi = (req, res) => {
    res.status(200).json({
        "status_code": 200,
        "status": "SUCCESS!!!",
        "data": {
            "name": APP_NAME,
            "version": APP_VERSION
        }
    })
};