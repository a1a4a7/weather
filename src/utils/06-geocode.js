const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYTFhNGE3IiwiYSI6ImNrNmR5MmQ2NzFyeHczaHBidWxwN2tlN3cifQ.PhmgYoGJVHiOHgYcsYeeIg'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined) // use (callback)name just pass sth 
        }
        // else if (response.body.features.length === 0) {
        //     callback(error, undefined)
        // }
        else {
            console.log('response.body.features[0].center[1]'+ response.body.features[0].center[1]);
            
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name


            })
        }
    })
}

module.exports = geocode