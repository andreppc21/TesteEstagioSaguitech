function calcularNFS() {
    const valorVenda = parseFloat(document.getElementById('valor-venda').value);
    const itensVendidos = document.getElementById('itens-vendidos').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;
    
    // Calculando os impostos
    const valorIRPF = valorVenda * irpf;
    const valorPIS = valorVenda * pis;
    const valorCOFINS = valorVenda * cofins;
    const valorINSS = valorVenda * inss;
    const valorISSQN = valorVenda * issqn;
    
    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valorVenda + totalImpostos;
    
    // Gerando a Nota Fiscal
    const notaFiscalHTML = `
        <div class="nota-fiscal">
            <div class="header">
                <div>
                    <p><strong>Emitente:</strong></p>
                    <p>Nome da Empresa</p>
                    <p>CNPJ: 00.000.000/0000-00</p>
                    <p>Endereço: Rua Exemplo, 123</p>
                    <p>Cidade - UF: Exemplo - XX</p>
                </div>
                <div>
                    <p><strong>Destinatário:</strong></p>
                    <p>Nome do Cliente</p>
                    <p>CPF/CNPJ: 000.000.000-00</p>
                    <p>Endereço: Rua Cliente, 456</p>
                    <p>Cidade - UF: Cliente - YY</p>
                </div>
            </div>
            <h2>Nota Fiscal de Serviço (NFS-e)</h2>
            <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
            <p><strong>Itens Vendidos:</strong> ${itensVendidos}</p>
            <table>
                <tr>
                    <th>Imposto</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>IRPF</td>
                    <td>R$ ${valorIRPF.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>PIS</td>
                    <td>R$ ${valorPIS.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>COFINS</td>
                    <td>R$ ${valorCOFINS.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>INSS</td>
                    <td>R$ ${valorINSS.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>ISSQN</td>
                    <td>R$ ${valorISSQN.toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Total de Impostos</th>
                    <th>R$ ${totalImpostos.toFixed(2)}</th>
                </tr>
            </table>
            <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
        </div>`; // Fechando a string template
    
    document.getElementById('nota-fiscal').innerHTML = notaFiscalHTML; // Exibindo a Nota Fiscal
}



