const shell = require('shelljs');

const { code } = shell.exec('npm run compile', { async: false });
if (code !== 0) {
    console.error("\x1B[31mRelease canceled! Compilation failed");
} else {
    const { publishCode } = shell.exec("lerna publish");
    if (publishCode !== 0) {
        console.error("\x1B[31mRelease failed! Lerna publish failed/canceled");
    } else {
        shell.exec("git push origin main");
    }
}
