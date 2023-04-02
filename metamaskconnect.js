document.getElementById("btn-ativar-metamask").addEventListener("click", function() {
    if (typeof window.ethereum !== "undefined") {
        // Solicitar acesso à carteira MetaMask
        window.ethereum.request({ method: "eth_requestAccounts" }).then(handleAccountsChanged).catch((error) => {
            console.error("Erro ao solicitar acesso à carteira MetaMask:", error);
        });

        // Lidar com mudanças de conta
        function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                console.log("Por favor, conecte-se à MetaMask.");
            } else {
                console.log("Conta conectada:", accounts[0]);
            }
        }

        // Ouvir eventos de mudança de conta
        window.ethereum.on("accountsChanged", handleAccountsChanged);
    } else {
        alert("Por favor, instale o MetaMask para usar este recurso.");
    }
});