// We recommend writing your creates separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'recipe',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Recipe',
  display: {
    label: 'Create Authorization',
    description: 'Creates a new Authorization Key.'
  },

  // `operation` is where the business logic goes.
  operation: {
    inputFields: [
      {key: 'username', required: true, type: 'string'},
      {key: 'password', required: true, type: 'string'},
      
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: 'https://api.pverify.com/Token',
        method: 'POST',
        body: JSON.stringify({
          username: bundle.inputData.username,
          password: bundle.inputData.password,
        //  grant_type: 'password',
            grant_type: password,
        }),
        headers: {
         'content-type': 'application/x-www-form-urlencoded'
	 'cache-control': 'no-cache'

         // 'X-API-Key': 'secret' //Unsure if should be commented or not
        }
      });

      return promise.then((response) => JSON.parse(response.content));
    },

  }
};
