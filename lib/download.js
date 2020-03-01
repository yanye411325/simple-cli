module.exports.clone = async function clone(gitUrl, des) {
  const { promisify } = require('util');
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`下载项目${des}`);
  process.start();
  try {
    await download(gitUrl, des);
  } catch (err) {
    process.fail();
  }
  process.succeed();
};
