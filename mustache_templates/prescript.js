const fs = require('fs');
const path = require('path');

const updateYamlFiles = (directoryPath) => {
    // Read all files and directories within the given directory
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error('Error stating file:', err);
                    return;
                }

                if (stat.isDirectory()) {
                    // Recursively process subdirectories
                    updateYamlFiles(filePath);
                } else if (path.extname(file) === '.yaml' || path.extname(file) === '.yml') {
                    // Process YAML file
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error reading file:', err);
                            return;
                        }
                        
                          const updatedData = data.replace(
                            /(- name: X-SailPoint-Experimental[\s\S]*?required: )true/,
                            '$1false'
                          );

                        // Write the updated YAML back to the file only if changes were made
                        if (updatedData !== data) {
                            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                                if (err) {
                                    console.error('Error writing file:', err);
                                } else {
                                    console.log(`Updated file: ${filePath}`);
                                }
                            });
                        }
                    });
                }
            });
        });
    });
};

updateYamlFiles(process.argv[2]);
