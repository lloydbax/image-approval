/**
 * @copyright Lloyd Baxter
*/

const path = require('path');
const glob = require('glob');

const setImageApprovalNeeded = path.posix.join('cypress', 'snapshots', '**', '__diff_output__', '*.png');
const savedImage = path.join('cypress', 'snapshots', '[!_]**', '*.png');
const newImage = path.join('cypress', 'screenshots', '**', '*.png');

function galleryArray() {
  const gallery = document.getElementById('approvalImages');
  const img = document.createElement('img');
  glob(setImageApprovalNeeded, (err, files) => {
    for (let i = 0; i < files.length; i += 1) {
      img.src = files[i];
      const src = document.getElementById('approvalImages');
      src.appendChild(img);
    }
    console.log(gallery);
  });
}
