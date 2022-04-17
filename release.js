const shell = require('shelljs');

const { code } = shell.exec('npm run compile', { async: false });
if (code !== 0) {
    console.error("\x1B[31mRelease canceled! Compilation failed");
} else {
    console.log("\x1B[35m[1] Compilation success! Publishing...");
    const { publishCode } = shell.exec("lerna publish");
    if (publishCode !== 0) {
        console.error("\x1B[31mRelease failed! Lerna publish failed/canceled");
    } else {
        console.log("\x1B[35m[1] Publishing success! Pushing chore commit");
        shell.exec("git push origin main");
    }
}
