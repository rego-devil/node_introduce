const currentDate = new Date();

global.date = currentDate;

export const getMessage = () => {
  const hour = currentDate.getHours();
  if( hour > 13)
    return "Добрый вечер, " + global.name
  else 
    return "Добрый день, " + global.name
}