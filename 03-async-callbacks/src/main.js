const reader = require('./lib/reader-alt');

const burritos = `${__dirname}/assets/burritos.html`;
const quesadillas = `${__dirname}/assets/quesadillas.html`;
const tacos = `${__dirname}/assets/tacos.html`;
const filesArray = [burritos, quesadillas, tacos];

const read = (paths, index, callback, results = []) => {
  // error checking
  if (!Array.isArray(paths)) return new Error('Argument must be an array.');
  if (index === paths.length && !results[0]) return new Error('Argument is an empty array.');

  // exit condition
  if (index === paths.length && results[0]) return callback(null, results);

  return reader(paths[index], (data) => {
    results.push(data);
    read(paths, index + 1, callback, results);
  });
};

// calling read function
read(filesArray, 0, (err, data) => {
  if (err) throw err;
  console.log(data); // eslint-disable-line
  return data;
});
