{
    try {
      console.log('Value of letVar before declaration:', letVar);
    } catch (error) {
      console.log('Error accessing letVar before declaration:', error.message);
    }
    let letVar = 10;
    console.log('Value of letVar after declaration:', letVar);
  }
  