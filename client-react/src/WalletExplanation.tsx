import React from 'react';

const WalletExplanation: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Understanding Solana Wallets</h1>
      <section>
        <h2>What is a Wallet?</h2>
        <p>
          A crypto wallet is a device or application that stores a collection of keys and can be used to send, receive, and track ownership of cryptocurrencies. Think of it like a digital wallet that you use to manage your money, but instead of holding cash or credit cards, it holds your cryptocurrency.
        </p>
        <p>
          <strong>Analogy:</strong> Imagine a wallet as your personal bank account. It allows you to store, send, and receive money, but in this case, it's digital currency.
        </p>
      </section>
      <section>
        <h2>Keypair</h2>
        <p>
          A keypair consists of a public key and a private key. The public key is like your bank account number, and the private key is like your password.
        </p>
      </section>
      <section>
        <h2>Public Key</h2>
        <p>
          The public key (or pubkey) is known as the wallet's receiving address. It can be shared with others so they can send you cryptocurrency.
        </p>
        <p>
          <strong>Analogy:</strong> Think of the public key as your bank account number. You can give it to people so they can send you money.
        </p>
      </section>
      <section>
        <h2>Secret Key</h2>
        <p>
          The secret key (or private key) is required to sign transactions to send cryptocurrency to another address. It must be kept secure and never shared with anyone.
        </p>
        <p>
          <strong>Analogy:</strong> The secret key is like your bank account password. If someone knows it, they can take all your money.
        </p>
      </section>
      <section>
        <h2>Security</h2>
        <p>
          Different wallets offer different levels of security. Some are more convenient to use, while others provide better security for your keys.
        </p>
      </section>
      <section>
        <h2>Types of Wallets</h2>
        <h3>Hardware Wallets (Hard Wallets)</h3>
        <p>
          Hardware wallets are physical devices that store your private keys offline. This makes them very secure because they are not connected to the internet.
        </p>
        <p>
          <strong>Examples:</strong> Ledger Nano S, Trezor.
        </p>
        <h3>Software Wallets (Soft Wallets)</h3>
        <p>
          Software wallets are applications that you install on your computer or smartphone. They are convenient and easy to use but can be less secure than hardware wallets if your device is compromised.
        </p>
        <p>
          <strong>Examples:</strong> Phantom (browser extension), Sollet (web-based), Solflare (mobile and web-based).
        </p>
      </section>
      <button>Next</button>
    </div>
  );
};

export default WalletExplanation;
