var fs = require('fs');
const spawn = require('child_process').spawnSync;

const datestr = new Date().toISOString().replace(/:/g, '-');
var BuildConfig = fs.readFileSync('.travis.yml', 'utf8');
const package = BuildConfig.split('\n')[2].split('/')[1];
var distro = BuildConfig.split('\n')[1].split('-')[1].replace('rawhide','27');

const gitAdd = spawn( 'git', [ 'add', '.' ]);
   if (~gitAdd.stderr) { console.log(gitAdd.stderr.toString());  }

const gitCommit = spawn('/usr/bin/git', ['commit', '-m', package + '-F' + distro]);
   if (~gitCommit.stderr) { console.log(gitCommit.stderr.toString());  }

const gitTag = spawn('/usr/bin/git', ['tag', '-a', package + '-F' + distro +'-'+ datestr, '-m', package + distro]);
   if (~gitTag.stderr) { console.log(gitTag.stderr.toString());  }

const gitPush = spawn('/usr/bin/git', ['push', '--tags', 'origin', 'master']);
   // if (~gitPush.stderr) { console.log(gitPush.stderr.toString());  }
