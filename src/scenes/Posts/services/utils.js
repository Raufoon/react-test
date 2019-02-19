export const dtoToList = dto => {
  let list = [];
  for (let key in dto) {
    if (dto.hasOwnProperty(key)) {
      list.push({
        id: key,
        ...dto[key]
      });
    }
  }
  return list;
};