import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Link } from 'react-router-dom';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import {program, SolarningAnchorPDA, SolarningAnchorData} from './Anchor/setup' //imported initiation file

const modules = [
    { title: 'Crypto Fundamentals', description: 'Learn the basics of cryptocurrencies.', link: '/wallet-explanation' },
    { title: 'DeFi Tutorial', description: 'Dive into decentralized finance.', link: '/wallet-explanation' },
    { title: 'Trivia Game', description: 'Test your knowledge with fun quizzes.', link: '/wallet-explanation' }
];

const CourseStart: React.FC = () => {
    const { connected, publicKey } = useWallet();
    const [progress, setProgress] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        if (connected && publicKey) {
            fetchUserProgress(publicKey)
                .then(userProgress => {
                    setProgress(userProgress);
                })
                .catch(error => {
                    console.error('Error fetching user progress:', error);
                });
        }
    }, [connected, publicKey]);

    const fetchUserProgress = async (userPublicKey: PublicKey) => {
        const [userPda] = await PublicKey.findProgramAddress(
            [Buffer.from('user_data'), userPublicKey.toBuffer()],
            program.programId
        );

        try {
            const userData = await program.account.userData.fetch(userPda) as SolarningAnchorData;
            const userProgress = {
                'Crypto Fundamentals': userData.progress.includes('Crypto Fundamentals') ? 50 : 0,
                'DeFi Tutorial': userData.progress.includes('DeFi Tutorial') ? 50 : 0,
                'Trivia Game': userData.progress.includes('Trivia Game') ? 50 : 0
            };
            return userProgress;
        } catch (error) {
            console.error('Error fetching user data:', error);
            return {
                'Crypto Fundamentals': 0,
                'DeFi Tutorial': 0,
                'Trivia Game': 0
            };
        }
    };
    
    return (
        <div style={styles.container}>
 

            <section style={styles.aboutSection}>
                <h2>What You Will Learn</h2>
                <ul style={styles.learnList}>
                    <li>Understand crypto economic concepts such as DEX, wallets, loans, transactions, fees, and scams.</li>
                    <li>Navigate through a decentralized finance tutorial with a simulated DEX onboard.</li>
                    <li>Test your knowledge and apply concepts through an engaging trivia monopoly-style game.</li>
                    <li>Earn NFT badges as a reward for completing each module.</li>
                </ul>
            </section>

            <section style={styles.missionVisionSection}>
                <div style={styles.mission}>
                    <h2>Mission</h2>
                    <p>To educate new users about cryptocurrency and decentralized finance in a fun, engaging, and safe environment.</p>
                </div>
                <div style={styles.vision}>
                    <h2>Vision</h2>
                    <p>To become the leading platform for crypto education, providing comprehensive knowledge and practical skills through interactive learning experiences.</p>
                </div>
            </section>

            {connected && (
                <section style={styles.modulesSection}>
                    <h2>Your Courses</h2>
                    <div style={styles.modulesContainer}>
                        {modules.map((module, index) => (
                            <div key={index} style={styles.moduleCard}>
                                <h3>{module.title}</h3>
                                <p>{module.description}</p>
                                <div style={styles.progressContainer}>
                                    <div style={{ ...styles.progressBar, width: `${progress[module.title] || 0}%` }}></div>
                                </div>
                                <Link to={module.link} style={styles.startButton}>
                                    <button>Start/Continue</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        textAlign: 'center',
        padding: '20px'
    },
    header: {
        marginBottom: '40px'
    },
    connectContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    walletButton: {
        marginTop: '20px'
    },
    aboutSection: {
        marginBottom: '40px'
    },
    learnList: {
        listStyleType: 'none',
        padding: 0,
        textAlign: 'left',
        maxWidth: '600px',
        margin: '0 auto'
    },
    missionVisionSection: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '40px'
    },
    mission: {
        maxWidth: '400px'
    },
    vision: {
        maxWidth: '400px'
    },
    modulesSection: {
        marginBottom: '40px'
    },
    modulesContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
    },
    moduleCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '300px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'left'
    },
    progressContainer: {
        height: '10px',
        backgroundColor: '#f3f3f3',
        borderRadius: '5px',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: '10px'
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4caf50'
    },
    startButton: {
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

export default CourseStart;
