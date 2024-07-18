import * as anchor from '../client-react/node_modules/@coral-xyz/anchor';
import { Program } from '../client-react/node_modules/@coral-xyz/anchor';
import { SolarningAnchor } from '../target/types/solarning_anchor';
import { PublicKey, SystemProgram } from '../client-react/node_modules/@solana/web3.js';
import { assert } from '../client-react/node_modules/chai';
import { describe, it, before } from '../client-react/node_modules/mocha';

describe('solarning-anchor', () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SolarningAnchor as Program<SolarningAnchor>;

  let user = anchor.web3.Keypair.generate();
  let userPda: PublicKey;
  let bump: number;

  before(async () => {
    console.log("Inside before hook...");
    console.log(`Generated public key: ${user.publicKey.toString()}`);

    // Airdrop 2 SOL to the user account
    const airdropSignature = await provider.connection.requestAirdrop(
      user.publicKey,
      2 * anchor.web3.LAMPORTS_PER_SOL
    );
    await provider.connection.confirmTransaction(airdropSignature);

    // Log user balance after airdrop
    const fundedBalance = await provider.connection.getBalance(user.publicKey);
    console.log(`User balance after airdrop: ${fundedBalance} lamports`);

    if (fundedBalance < 2 * anchor.web3.LAMPORTS_PER_SOL) {
      throw new Error('Airdrop failed or insufficient balance');
    }

    // Derive the PDA and bump for the user's data
    [userPda, bump] = await PublicKey.findProgramAddress(
      [Buffer.from('user_data'), user.publicKey.toBuffer()],
      program.programId
    );
    console.log(`Derived PDA: ${userPda.toString()} with bump: ${bump}`);
  });

  it('Initializes the user account', async () => {
    try {
      console.log("Starting Initialize test...");
      await program.rpc.initialize(bump, {
        accounts: {
          userData: userPda,
          user: user.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [user],
        options: {
          skipPreflight: true,
        },
      });

      const userData = await program.account.userData.fetch(userPda);
      assert.equal(userData.owner.toString(), user.publicKey.toString());
      assert.equal(userData.progress, '');
      console.log("Initialize test passed");
    } catch (err) {
      console.error("Initialize test failed", err);
      console.log(`User PDA: ${userPda.toString()}`);
      throw err; // rethrow the error after logging
    }
  });

  it('Updates the user progress', async () => {
    const newProgress = 'Module 1';
    try {
      console.log("Starting UpdateProgress test...");
      await program.rpc.updateProgress(newProgress, {
        accounts: {
          userData: userPda,
          user: user.publicKey,
        },
        signers: [user],
        options: {
          skipPreflight: true,
        },
      });

      const userData = await program.account.userData.fetch(userPda);
      assert.equal(userData.progress, newProgress);
      console.log("UpdateProgress test passed");
    } catch (err) {
      console.error("UpdateProgress test failed", err);
      console.log(`User PDA: ${userPda.toString()}`);
      throw err; // rethrow the error after logging
    }
  });

  it('Resets the user progress', async () => {
    try {
      console.log("Starting ResetProgress test...");
      await program.rpc.resetProgress({
        accounts: {
          userData: userPda,
          user: user.publicKey,
        },
        signers: [user],
        options: {
          skipPreflight: true,
        },
      });

      const userData = await program.account.userData.fetch(userPda);
      assert.equal(userData.progress, '');
      console.log("ResetProgress test passed");
    } catch (err) {
      console.error("ResetProgress test failed", err);
      console.log(`User PDA: ${userPda.toString()}`);
      throw err; // rethrow the error after logging
    }
  });
});
