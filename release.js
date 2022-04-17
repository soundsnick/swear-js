const shell = require('shelljs');
const child_process = require('child_process');

const { code } = shell.exec('npm run compile', { async: false });
if (code !== 0) {
    console.error("\x1B[31mRelease canceled! Compilation failed\x1b[0m");
} else {
    console.log("\x1B[32m[1] Compilation success! Publishing...\x1b[0m");

    const publish = child_process.spawnSync("lerna", ["publish"], {stdio: 'inherit'});
    if (publish.status !== 0) {
        console.error("\x1B[31mRelease failed! Lerna publish failed/canceled\x1b[0m");
    } else {
        console.log("\x1B[32m[1] Publishing success! Pushing chore commit\x1b[0m");
        shell.exec("git push origin main");
    }
}
