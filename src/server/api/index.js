const axios = require('axios');

exports.test = (req, res) => {
	axios.get('https://api.cartolafc.globo.com/mercado/destaques')
	  .then(function(response) {

	  	res.json(response.data);
	    console.log(response.data);
	    console.log(response.status);
	    console.log(response.statusText);
	    console.log(response.headers);
	    console.log(response.config);
	  });	 
};

exports.findTeam = async (name) => {

	const response = await axios.get('https://api.cartolafc.globo.com/times', {
		params: {
			q: name
		}
	});

	//console.log(response.data);
    console.log(response.status);
    //console.log(response.statusText);
    console.log(response.headers);
    //console.log(response.config);	
    return response.data;
	  	 
}