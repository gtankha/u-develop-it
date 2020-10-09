// utility to check if an object has the required properties
// e.g., inputCheck(object, 'prop1', 'prop2', 'etc')

module.exports = function(obj, ...props) {
  const errors = [];
  console.log(obj);

  props.forEach((prop) => {
    // if property is blank or doesn't exist, add to errors array
    if (obj[prop] === undefined || obj[prop] === '') {
      console.log (obj[prop]);
      errors.push(`No ${prop} specified.`);
    }
  });

  if (errors.length) {
    return {
      error: errors.join(' ')
    };
  }
  
  return null;
};