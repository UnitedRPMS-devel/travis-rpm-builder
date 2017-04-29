const spawn = require('child_process').spawnSync;

const gitClone = spawn( '/usr/bin/git', [ 'clone', 'git@github.com:paulcarroty/travis-rpm-repobuilder.git', '/tmp/travis-rpm-repobuilder/']);
if (~gitClone.stderr) { console.log(gitClone.stderr.toString());  }

const gitCommit = spawn('/usr/bin/git', ['-C', '/tmp/travis-rpm-repobuilder', 'commit', '--allow-empty', '-m', 'Trigger']);
if (~gitCommit.stderr) { console.log(gitCommit.stderr.toString());  }

const gitPush = spawn('/usr/bin/git', ['-C', '/tmp/travis-rpm-repobuilder', 'push', 'origin', 'master']);
// if (~gitPush.stderr) { console.log(gitPush.stderr.toString());  }
