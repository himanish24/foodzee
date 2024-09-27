module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Foodzee - find a place to work with wifi',
        pageHeader: {
            title: 'Foodzee',
            strapline: 'Find places to ENTERTAIN your Tongue'
        },
        sidebar: "Looking for wifi and a seat? Foodzee helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Street 11 Food Court',
            address: 'jodimetla',
            rating: 3,
            facilities: ['Fast food', 'Biryani', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Softy Bakers',
            address: 'pocharam',
            rating: 4,
            facilities: ['Puffs', 'Cakes', 'Cool Drinks'],
            distance: '200m'
        }, {
            name: 'Bawarchi Restaurant',
            address: 'Narapally',
            rating: 2,
            facilities: ['Biryani', 'Mandi'],
            distance: '500m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};