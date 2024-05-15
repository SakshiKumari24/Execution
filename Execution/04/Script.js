{
    try {
      console.log('Value of letVar before declaration:', letVar);
    } catch (error) {
      console.log('Error accessing letVar before declaration:', error.message);
    }
  
    try {
      console.log('Value of varVar before declaration:', varVar);
    } catch (error) {
      console.log('Error accessing varVar before declaration:', error.message);
    }
  
    try {
      console.log('Value of constVar before declaration:', constVar);
    } catch (error) {
      console.log('Error accessing constVar before declaration:', error.message);
    }
    let letVar = 10;
    var varVar = 20;
    const constVar = 30;
    console.log('Value of letVar after declaration:', letVar);
    console.log('Value of varVar after declaration:', varVar);
    console.log('Value of constVar after declaration:', constVar);
  }
  