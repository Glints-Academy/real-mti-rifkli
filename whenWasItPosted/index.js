const whenWasItPosted = date => {

  let today = new Date;
  console.log(today)

  //et splitdate = date.split(" ")

  // console.log('date:', splitdate[0])
  // console.log('Month:', splitdate[1])
  // console.log('year:', splitdate[2])
  
  const inputDate= new Date(date)

  const countdate = (today - inputDate) 
  

  const day =  countdate/3600/1000/24
  
  const week = day / 7

  
  const month = day / 30

  const year = day /365
  
  
  console.log(day)
  console.log(week)
  console.log(month)
  console.log(year)
}


// do not change this code below
const changeToString = __ => {
  const _ = new Date(__)
  const month = _.toLocaleString('default', { month: 'long' });
  const date = _.getDate()
  const year = _.getFullYear()
  return `${date} ${month} ${year}`
}
const test = (testCase, result) => console.log(testCase === result);

const date = new Date();
const date1 = new Date();
const date2 = new Date();
const date3 = new Date();
const date4 = new Date();

test(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11))), '11 months ago')
test(whenWasItPosted(changeToString(date1.setDate(date.getDate() - 14))), '2 weeks ago')
test(whenWasItPosted(changeToString(date2.setDate(date.getDate() - 3))), '3 days ago')
test(whenWasItPosted(changeToString(date3.setFullYear(date.getFullYear() - 1))), '1 year ago')
test(whenWasItPosted(changeToString(date4.setFullYear(date.getFullYear() - 20))), '20 years ago')