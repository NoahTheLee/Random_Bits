const containers = ["dl1", "dl2", "dl3", "dl4", "dl5"];

for (let i = 0; i < containers.length; i++) {
    document.getElementById(containers.at(i)).addEventListener('click', () => {
        const now = new Date();
        const formattedTime = now.toLocaleString();

        // Create the file content
        const fileContent = `You have been HACKED by DAEDALUS SYSTEMS!!!\nAll your file are belong to us!!!\n
${formattedTime}
Luca Imbriolo
Noah Lee
Garrett Francis
Adam Aguilar

      ,-.       _,---._ __  / \\
     /  )    .-'       \`./ /   \\
    (  (   ,'            \`/    /|
     \\  \`-"             \\'\\   / |
      \`.              ,  \\ \\ /  |
       /\`.          ,'-\`----Y   |
      (            ;        |   '
      |  ,-.    ,-'  your   |  /
      |  | (   |     data   | /
      )  |  \\  \`.___________|/
      \`--'   \`--'
    `;

        // Create a Blob with the file content
        const blob = new Blob([fileContent], { type: 'text/plain' });

        // Create a temporary download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'DaedalusSystems.txt';
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    });
}
