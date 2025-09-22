// Inicializar EmailJS com sua PUBLIC_KEY
emailjs.init("pDt-_h1apM49RklNz"); // Substitua pela sua Public Key

const form = document.getElementById('supportForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar os valores do formulário
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const device = document.getElementById('device').value;
    const confirmDevice = document.getElementById('confirmDevice').value;
    const occurrence = document.getElementById('occurrence').value;
    const motive = document.getElementById('motive').value;

    // Verificar se todos os campos estão preenchidos
    if(!email || !age || !device || !confirmDevice || !occurrence || !motive) return;

    // Montar os parâmetros para enviar no template do EmailJS
    const templateParams = {
        email: email,
        age: age,
        device: device,
        confirmDevice: confirmDevice,
        occurrence: occurrence,
        motive: motive
    };

    // Enviar o e-mail via EmailJS
    emailjs.send('service_kvyvfij', 'template_mkbwdh3', templateParams)
    .then(() => {
        // Mostrar feedback por 5 segundos
        feedback.classList.remove('hidden');
        setTimeout(() => feedback.classList.add('hidden'), 5000);

        // Resetar o formulário
        form.reset();
    })
    .catch(err => {
        console.error("Erro ao enviar o e-mail:", err);
        alert("Ocorreu um erro ao enviar seu suporte. Tente novamente.");
    });
});