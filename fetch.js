// Function to download a file
function downloadFile(data, filename) {
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  
  // Fetch API request
  for (let i = 1; i <= 200; i++) {
        fetch(`https://ipfs.io/ipfs/bafybeihlmtcp3bd7beeuxe36ovsyk2syzbnrapxg4exsmfxvilemsq5a2e/${i}.json`)
          .then(response => response.json())
          .then(data => {
        const json = JSON.stringify(data)
            // Save JSON string as a file
            downloadFile(json, `${i}.json`);
          })
          .catch(error => {
            console.error('Error:', error);
          });
 }