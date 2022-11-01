

class DataSource {
    static searchAnime(keyword) {
        return fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&page=1`)
        .then (response => {
            return response.json();
        })
        .then (responseJson => {
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword}is not found`);
            }
        })
    }
}

export default DataSource;

// class DataSource {
//     static searchClub(keyword) {
//         return fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&page=1`)
//         .then (response => {
//             return response.json();
//         })
//         .then (responseJson => {
//             if (responseJson.results) {
//                 return Promise.resolve(responseJson.results);
//             } else {
//                 return Promise.reject(`${keyword}is not found`);
//             }
//         })