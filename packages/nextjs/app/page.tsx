"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import {
  BuildingStorefrontIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-stark";
import { useAccount, useBalance } from "@starknet-react/core";
import { Address as AddressType } from "@starknet-react/chains";
import {
  DynamicWidget,
  useDynamicContext,
  useIsLoggedIn,
  useTokenBalances,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";
import { useEffect } from "react";
import { useFetchStarknetAccountByEmail } from "~~/hooks/useFetchStarknetAccountByEmail";
import { useCreateStarknetAccount } from "~~/hooks/useCreateStarknetAccount";

const Home: NextPage = () => {
  const { user } = useDynamicContext();
  const { data: starknetAccount } = useFetchStarknetAccountByEmail(
    user?.email || ""
  );
  console.log("starknetAccount", starknetAccount);
  const { mutateAsync: createStarknetAccout } = useCreateStarknetAccount();
  const isLoggedIn = useIsLoggedIn();


  useEffect(() => {
    console.log("using effect");
    if (!starknetAccount || !user) return;
    console.log("starknetAccount", starknetAccount);
    console.log("starknetAccount", starknetAccount);
    if (starknetAccount === "0xNone") {
      createStarknetAccout({
        email: user?.email || "",
        businessName: user?.alias || "",
      });
    }
  }, [starknetAccount, user, createStarknetAccout]);

  if (!isLoggedIn) {
    return (
      <main className="mx-auto flex h-full sm:pt-0 mt-8 w-full flex-col items-center justify-center gap-4 px-5 sm:w-1/2 sm:px-0">
        <div className="flex w-full flex-col items-center gap-4 rounded-xl border-2 border-black bg-white p-6 shadow-[2px_2px_0px_rgba(0,0,0,1)] ">
          <p className="truncate text-sm font-medium text-gray-500">
            Please connect your wallet to proceed
          </p>
          <DynamicWidget />
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto flex h-full sm:pt-0 mt-8 w-full flex-col items-center justify-center gap-4 px-5 sm:w-1/2 sm:px-0">
      <div className=" w-full">
        <DynamicWidget />
      </div>
      <div className="mb-5 flex w-full flex-col items-center gap-4 rounded-xl border-2 border-black bg-white p-6 shadow-[2px_2px_0px_rgba(0,0,0,1)] ">
        <p className="mb-2 text-3xl font-semibold tracking-wide sm:text-5xl">
          {21}
          <span className="text-xl font-medium"> MXN</span>
        </p>
        <p className="truncate text-sm font-medium text-gray-500">
          TOTAL BALANCE
        </p>
      </div>
      <Link
        href="/charge"
        className="text-center w-full rounded-xl border-2 border-black bg-emerald-400 p-2.5 text-xl	 font-semibold hover:bg-emerald-500 active:bg-emerald-600"
      >
        Charge
      </Link>
      <Link
        href="/withdraw"
        className="text-center w-full rounded-xl border-2 border-black bg-amber-400 p-2.5	 text-xl font-semibold hover:bg-amber-500 active:bg-amber-600"
      >
        Withdraw Funds
      </Link>
      <div className="mt-10 flex justify-center pt-8 sm:mt-14">
        <Image src="/chipi-chunky.png" alt="Hashme" width={100} height={100} />
      </div>
    </main>
  );
};

export default Home;
