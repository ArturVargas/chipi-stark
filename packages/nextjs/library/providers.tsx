"use client";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";



export function Providers({ children }: PropsWithChildren) {
   
      
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <DynamicContextProvider
      settings={{
        environmentId: "6748629d-7ef0-460a-9943-398024ed3af2",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </DynamicContextProvider>
  );
}
