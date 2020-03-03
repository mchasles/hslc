const kebabLowerCase = str =>
  str
    .replace(/\?/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();

const removeAccents = str => {
  const accent = [
    /[\300-\306]/g,
    /[\340-\346]/g, // A, a
    /[\310-\313]/g,
    /[\350-\353]/g, // E, e
    /[\314-\317]/g,
    /[\354-\357]/g, // I, i
    /[\322-\330]/g,
    /[\362-\370]/g, // O, o
    /[\331-\334]/g,
    /[\371-\374]/g, // U, u
    /[\321]/g,
    /[\361]/g, // N, n
    /[\307]/g,
    /[\347]/g, // C, c
  ];
  const noaccent = [
    'A',
    'a',
    'E',
    'e',
    'I',
    'i',
    'O',
    'o',
    'U',
    'u',
    'N',
    'n',
    'C',
    'c',
  ];

  for (let i = 0; i < accent.length; i++) {
    str = str.replace(accent[i], noaccent[i]);
  }

  return str;
};

export const getPageUrl = (str, parent) => {
  const strToKebabCase =
    str.indexOf('(') === -1
      ? removeAccents(kebabLowerCase(str))
      : removeAccents(kebabLowerCase(str.substring(0, str.indexOf('('))));

  let link = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
  link = link.slice(-1) === '#' ? link.concat(strToKebabCase) : link;
  if (parent) {
    link = link ? link : parent.concat(strToKebabCase);
  }

  link = link ? link : strToKebabCase;

  return link === '/' ? '' : link;
};

export const getLabel = str => {
  return str.indexOf('(') === -1 ? str : str.substring(0, str.indexOf('('));
};
