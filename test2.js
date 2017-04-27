
const spawn = require( 'child_process' ).spawnSync;
const ls = spawn( 'git', [ 'status' ] );

//console.log( `stderr: ${ls.stderr.toString()}` );
//console.log( `stdout: ${ls.stdout.toString()}` );

if (~ls.stderr.toString()){
   console.log(ls.stderr.toString());
}
