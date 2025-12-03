import "./globals.css";

export const metadata = {
  title: "HUB Financeiro",
  description: "Monitoramento dos serviços do HUB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          HUB Financeiro — OceanPact
        </header>

        {children}

        <footer>
          © {new Date().getFullYear()} OceanPact — HUB Financeiro
        </footer>
      </body>
    </html>
  );
}
