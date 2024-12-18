const { exec } = require('child_process');

// Step 1: Run Firebase login (if not already authenticated)
exec('firebase login', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error logging in: ${err}`);
    return;
  }

  console.log(stdout);

  // Step 2: Deploy to Firebase Hosting
  exec('firebase deploy', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error deploying: ${err}`);
      return;
    }
    console.log('Deployment successful');
    console.log(stdout);
  });
});
