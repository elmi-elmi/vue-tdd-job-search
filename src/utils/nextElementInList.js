const nextElementInList = function (list, el) {
  const currentActionIndex = list.indexOf(el);
  const nextActionIndex = (currentActionIndex + 1) % list.length;
  return list[nextActionIndex];
};

export default nextElementInList;
