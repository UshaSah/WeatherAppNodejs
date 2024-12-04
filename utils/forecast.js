const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=1749e1bdfd5a3c31337c3e3404f9b689&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        }
        else if (body.error) {
            callback('Unable to connect to forecast services', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    
})
}

module.exports = forecast