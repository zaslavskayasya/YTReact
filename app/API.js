import axios from 'axios';
const key = 'AIzaSyDnHWkrm1UcqjHXw87mfHhZhXIgax7F-Fk';
let API = {
    getVideos: function () {
       return new Promise(function (resolve, reject) {
            axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet',
                    maxResults: 4,
                    key: key,
                    chart: 'mostPopular'
                }
            }).then(function (data) {
                resolve(data.data.items);
                /*console.log(data)*/
            })
       })
    }
}


export default API;