"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BuildingStorefrontIcon, CreditCardIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-stark";
import { useAccount } from "@starknet-react/core";
import { Address as AddressType } from "@starknet-react/chains";

const Home: NextPage = () => {
  const connectedAddress = useAccount();
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Chipi Pay</span>
            <small className="block text-base mt-2">Accept  Crypto in your bussines and receive it in your local currency</small>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Increase your ticket up to 60% with transactions cheaper than Visa or Master Card</p>
            {/* <Address address={connectedAddress.address as AddressType} /> */}
          </div>
          {/* <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p> */}
          {/* <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.cairo
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/snfoundry/contracts/src
            </code>
          </p> */}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BuildingStorefrontIcon className="h-8 w-8 fill-secondary" />
              <p>
                Start to accept Crypto in your Bussines: {" "}
                <Link href="/merchant" passHref className="link">
                  Merchant
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <CreditCardIcon className="h-8 w-8 fill-secondary" />
              <p>
                Pay with Crypto in your favorite chain: {" "}
                <Link href="/customer" passHref className="link">
                  Customer
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <div
          onClick={() => {
            writeAsync();
          }}
        >
          TEST TX
        </div> */}
      </div>
    </>
  );
};

export default Home;
