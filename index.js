// setTimeout() tanpa callback
setTimeout(() => {
    console.log('Program akan berhenti dalam 5 detik');
    setTimeout(() => {
        console.log('Program akan berhenti dalam 4 detik');
        setTimeout(() => {
            console.log('Program akan berhenti dalam 3 detik');
            setTimeout(() => {
                console.log('Program akan berhenti dalam 2 detik');
                setTimeout(() => {
                    console.log('Program akan berhenti dalam 1 detik');
                    setTimeout(() => {
                        console.log('Program berhenti');
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// setTimeout() menggunakan callback
function programBerhentiDalam(detik, callback) {
    setTimeout(() => {
        console.log('Program berhenti dalam ' + detik + ' detik');
        if (detik > 1) {
            programBerhentiDalam(detik - 1, callback);
        } else {
            setTimeout(() => {
                callback();
            }, 1000);
        }
    }, 1000);
}
programBerhentiDalam(5, () => {
    console.log('Program berhenti');
});