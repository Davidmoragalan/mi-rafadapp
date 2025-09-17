async function buyTicket() {
    const number = document.getElementById("ticketNumber").value;
    const phone = document.getElementById("phoneNumber").value;

    if(!number || !phone) {
        alert("Ingresa número y teléfono");
        return;
    }

    // Simular compra
    document.getElementById("status").innerText = `¡Boleto comprado! Número: ${number}, Teléfono: ${phone}`;
    
    // Aquí en una DApp real usarías Ethers.js para conectar a tu contrato
    console.log(`Boleto comprado: Número ${number}, Teléfono ${phone}`);
}
