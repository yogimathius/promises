const executorFct = (resolveFct, rejectFct) => {
  // async operation

  rejectFct("Failed!😖");

  resolveFct("Success!😃");
};

// 1. creating a promise object
// 2. consuming the promise
