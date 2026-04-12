const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

const targetDir = path.join(__dirname, 'src');

walkDir(targetDir, (filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/satiricalNews/g, 'localNews')
            .replace(/satiricalByCategory/g, 'localByCategory')
            .replace(/satiricalMostRead/g, 'localMostRead')
            .replace(/allSatiricalArticles/g, 'allLocalArticles')
            .replace(/satiricalFeatured/g, 'localFeatured')
            .replace(/satiricalBreaking/g, 'localBreaking')
            .replace(/satiricalTrending/g, 'localTrending')
            .replace(/satiricalLive/g, 'localLive');
            
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', filePath);
        }
    }
});

const oldFile = path.join(targetDir, 'data', 'satiricalNews.js');
const newFile = path.join(targetDir, 'data', 'localNews.js');

if (fs.existsSync(oldFile)) {
    fs.renameSync(oldFile, newFile);
    console.log('Renamed satiricalNews.js to localNews.js');
}
