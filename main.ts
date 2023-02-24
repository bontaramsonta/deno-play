function delayed(label: string, success: boolean, delay: number) {
    console.log(label, 'called');
    return new Promise<string>((resolve, reject) =>
        setTimeout(() => {
            console.log('[delayed]', label);
            success ? resolve(label) : reject(`${label} promise reject`);
        }, delay)
    );
}

if (import.meta.main) {
    const success = delayed('success', true, 3000);
    const failure = delayed('failure', false, 1000);
    const failure2 = delayed('failure2', false, 2000);
    const results = await Promise.allSettled([success, failure, failure2]);
    console.log(results);
}
