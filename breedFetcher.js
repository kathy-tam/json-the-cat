const breed = process.argv.slice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  if (!data.length) {
    console.log(`Requested breed not found.`);
    return;
  }
  console.log(data[0].description);
});
