//
// PACKAGE=$(grep packages_buildrequires_git .travis.yml | cut -d '/' -f2)
// DISTRO=$(grep mock_config .travis.yml | cut -d ' ' -f4)
// DATE=$(date +"%Y-%m-%d--%H-%m-%S")
//
// git fetch --tags
//
// git add . && git commit -m "Add $PACKAGE"
//
// git tag -a "$PACKAGE-${DISTRO^^}-$DATE" -m "$PACKAGE-${DISTRO^^}"

// git push --tags origin master

var date = new Date();
var datestr = date.getFullYear().toString() + '-' + date.getMonth().toString() + '-' + date.getDay().toString() + 'T' + date.getHours().toString() + '-' + date.getMinutes().toString() + '-' + date.getSeconds().toString() + '-' + date.getMilliseconds().toString();

console.log(datestr);
