const sample = require('../samples/sample_issue');

const createIssue = (z, bundle) => {
  console.log("this is working");
  const responsePromise = z.request({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/todos/1`,
    
  });
  z.console.log("this is response", responsePromise)
  return responsePromise;
 
};

module.exports = {
  key: 'issue',
  noun: 'Issue',

  //Action of CLI
  display: {
    label: 'Create Issue',
    description: 'Creates a issue.'
  },

  operation: {
    inputFields: [
      {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
      {key: 'title', label:'Title', required : false},
      {key: 'body', label:'Body', required: false}
    ],
    perform: createIssue,
    // sample: sample     //default when the request 
  }
};
