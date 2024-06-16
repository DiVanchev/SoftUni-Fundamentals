function echoType(data) {
    if (typeof data === "string" || typeof data === "number") {
      console.log(typeof data);
      console.log(data);
    } else if (typeof data === "object") {
      console.log(typeof data);
      console.log("Parameter is not suitable for printing");
    } else {
      console.log("Parameter is not suitable for printing");
    }
  }