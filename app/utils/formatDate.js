const formatDate = date => {
  let newDate = date.toDateString().split(' ');
  newDate.splice(0, 1);

  return newDate.join(' ');
};

export default formatDate;
