  const isPrime = num => {
    // do code here
    let array = [];
    for (let i = 1; i <=num; i++){
      const result = num % i;
      array.push(result)
    }
    
    const filter = array.filter((num)=> num ===0)
    console.log(filter)

    if (filter.length > 2){
      console.log(`${num} is not a prime`)
    }
    else {
      console.log(`${num} is a prime`)
    }
  }

  // do not change this code below
  const test = (testCase, result) => console.log(testCase === result);

  test(isPrime(2), '2 IS A PRIME')
  test(isPrime(283), '283 IS A PRIME')
  test(isPrime(21), '21 IS NOT A PRIME')
  test(isPrime(389), '389 IS A PRIME')
  test(isPrime(973), '973 IS NOT A PRIME')

