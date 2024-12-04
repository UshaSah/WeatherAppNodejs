const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const search_location = process.argv[2]

if (!search_location) {
    console.log('Please provide a location')
} else {
    geocode(search_location, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        } 
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(location)
            console.log(forecastData)
        })
    })
}



   