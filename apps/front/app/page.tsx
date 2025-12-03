"use client";

import { useState } from "react";

export default function Home() {
  
  const [status, setStatus] = useState({
    hubcore: null as string | null,
    integration: null as string | null,
    emp1Sgo: null as string | null
  });



  async function verificaServicos() {
    try {
      const respHubCor = await fetch("http://localhost:3001/health");
      const hubjson = await respHubCor.json();

      const respIntegration = await fetch("http://localhost:3002/health");
      const integrationjson = await respIntegration.json();

      const respEmp1Sgo = await fetch("http://localhost:3002/health");
      const emp1Sgojson = await respEmp1Sgo.json();

      setStatus({
        hubcore: hubjson.status,
        integration: integrationjson.status,
        emp1Sgo: emp1Sgojson.status
        });

    } catch (err) {
      setStatus({
        hubcore: "Parado",
        integration: "Parado",
        emp1Sgo: "Parado",
      });
    }
  }


  return (
    <main className="main-container">
      <h1>Bem-vindo ao Back-end do HUB Financeiro</h1>
      <p>
        Esta é a interface de checklist do sistema. Abaixo você pode testar a comunicação
        com os serviços do Hub.
      </p>

        <button onClick={verificaServicos}>
            Verificar status dos serviços
        </button>

        { (status.hubcore || status.integration) && (
            <div className="result">
                <h3>Status dos serviços:</h3>
                <ul>
                    <li>Hub-core: <span className="status-online"> {status.hubcore ?? "Aguardando..."} </span> </li>
                    <li>Integration: <span className="status-online"> {status.integration ?? "Aguardando..."} </span></li>
                    <ul>
                        <li style={{marginLeft: "20px"}}>Empresa1-SGO: <span className="status-online"> {status.emp1Sgo ?? "Aguardando..."} </span></li>
                    </ul>
                    
                </ul>
            </div>
        )}

      
    </main>
  );
}
