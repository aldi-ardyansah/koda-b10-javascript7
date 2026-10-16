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