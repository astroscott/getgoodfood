const apiKey = "eTGz5XfFA3AsWE1Jwke1Nul0eJKuB3ANrvLmN5gwZGSWQJaI1hsWzSYVhisRYfTNwxYSxq93USa9Sxd1yNzoStGti1VyDDnOxhpZTo8_2VCdbwh7OtllIMXYjdr_XHYx";

export class GetRestaurants {
    static search(term, location) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=rating`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then( (response) => {
            return response.json();
        }).then( (jsonResponse) => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses;
                };
        }).catch((error) => {
            console.log(error);
        });
    }
}