function compact(arr: Array<unknown>) {
  const newArr = arr.filter((item) => {
    return (
      item !== false &&
      item !== 0 &&
      item !== '' &&
      item !== null &&
      item !== undefined
    );
  });

  return newArr;
}

console.log(compact([0, 1, false, 2, '', 3]));
