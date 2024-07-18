  import { IdlAccounts, Program, AnchorProvider, web3} from "@coral-xyz/anchor";
  import {SolarningAnchor } from "./solarning_anchor";
  import idl from "./idl.json"
  import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
  import { Buffer } from 'buffer/';

  // import { Wallet } from "@solana/wallet-adapter-base";

  const programId = new PublicKey(idl.address);
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // Create a wallet instance (use a dummy wallet for now)
  const keypair = new web3.Keypair();

  // Create a Provider
  // const provider = new AnchorProvider(connection, wallet, {
  //     preflightCommitment: "confirmed",
  //   });

  // Initialize the program interface with the IDL, program ID, and connection.
  // This setup allows us to interact with the on-chain program using the defined interface.
  export const program = new Program<SolarningAnchor>(idl as any, {connection,});



  export const SolarningAnchorPDA = PublicKey.findProgramAddressSync(
    [new Uint8Array(Buffer.from("SolarningAnchor"))],
      program.programId,
  );

  // This is just a TypeScript type for the SolarningAnchor data structure based on the IDL
  // We need this so TypeScript doesn't yell at us
  export type SolarningAnchorData = IdlAccounts<SolarningAnchor>["userData"];
