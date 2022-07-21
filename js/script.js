const toastTrigger = document.getElementById('toastTrigger');
const toastAlert = document.getElementById('toastAlert');

if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {

        const toast = new bootstrap.Toast(toastAlert);
        toast.show();

    });
}
