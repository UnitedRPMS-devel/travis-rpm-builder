const spawn = require('child_process').spawnSync;

const packages = process.argv.slice(2);


for (var i in packages){
   const gitClone = spawn( '/usr/bin/git', [ 'clone', 'git@github.com:UnitedRPMs/' + packages[i] + '.git', '/tmp/' + packages[i] + '/']);
      //if (~gitClone.stderr) { console.log(gitClone.stderr.toString());  }

   const bump = spawn( '/usr/bin/rpmdev-bumpspec', ['-u', 'UnitedRPMs autorebuilder <unitedrpms@protonmail.com>', '/tmp/' + packages[i] + '/' + packages[i] + '.spec'] );
   if (~bump.stderr) { console.log(bump.stderr.toString());  }

   const gitAdd = spawn( 'git', ['-C', '/tmp/' + packages[i], 'add', '.' ]);
   if (~gitAdd.stderr) { console.log(gitAdd.stderr.toString());  }

   const gitCommit = spawn('/usr/bin/git', ['-C', '/tmp/' + packages[i], 'commit', '-m', 'Bump']);
      if (~gitCommit.stderr) { console.log(gitCommit.stderr.toString());  }

   const gitPush = spawn('/usr/bin/git', ['-C', '/tmp/' + packages[i], 'push', 'origin', 'master']);
   //if (~gitPush.stderr) { console.log(gitPush.stderr.toString());  }

}
