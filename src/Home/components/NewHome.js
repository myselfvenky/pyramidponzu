import styles from './home.module.css'
import { useState } from 'react'
import { RiMenu4Fill } from "react-icons/ri"
export default function NewHome() {
    const [sand, setSand] = useState(0)
    const [mysol, setMysol] = useState(0)
    const [data, setData] = useState(0)
    const NavOpenClosefn = () => {

        const element = document.getElementById("nav")
        const width = "80%";
        if (element.style.width === width) {
            element.style.width = "0%"

        } else {
            element.style.width = width;
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.main2}>
                <div className={styles.inner}>
                    <div className={styles.topnav}>
                        <RiMenu4Fill className={styles.burger} onClick={NavOpenClosefn} />
                        <button className={styles.wc_btn}
                            onClick={() => { }}
                        >Wallet Connect</button>
                    </div>
                    <div className={styles.head}>
                        <h1>SAND STAKING</h1>
                    </div>
                    <div className={styles.card_cont}>
                        <div className={styles.card}>
                            <h2>TVL</h2>
                            <h3>$100,000,00</h3>
                        </div>
                        <div className={styles.card}>
                            <h2>Daily Return</h2>
                            <h3>15.00%</h3>
                        </div>
                        <div className={styles.card}>
                            <h2>SOL/Day</h2>
                            <h3>0 SOL</h3>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.section_head}>Stake</div>
                        <div className={styles.bal_card}> Balance: {mysol} SOL </div>
                        <input type="number" placeholder="Enter Amount"
                            onChange={(e) => setSand(e.target.value)}
                            className={styles.in}

                        />
                        <button className={styles.buy_btn}>Buy {sand} SAND</button>

                    </div>
                    <div className={styles.section}>
                        <div className={styles.section_head}>Claim</div>
                        <div className={styles.data}>0.00000000 SOL</div>
                        <div>
                            <button className={styles.buy_btn}>Compound</button>
                            <button className={styles.buy_btn}>Claim Rewards</button>
                        </div>

                    </div>
                    <div className={styles.head3}>
                        <h1>Pharaoh's Treasure</h1>
                    </div>
                    <div className={styles.referal}>
                        <h1>Refrence</h1>
                        <input className={styles.referalin} />
                        <button className={styles.buy_btn}
                            style={{
                                "border": "3px solid #000",
                            }}
                        >COPY TO CLIPBOARD</button>
                        <p className={styles.para}>Earn 15% of the SOL used to compound from anyone who uses your referral link</p>
                    </div>
                    {/* <div className={styles.data_card}>
                        <div className={styles.data_card_head}>Ancient Egypt</div>
                        <div className={styles.bar}></div>
                        <div className={styles.data_cont}>
                            <div className={styles.data_row}>Daily Return
                                <div className={styles.bar_cont}>
                                    <div className={styles.bar2} />
                                </div>
                                <div>15%</div>
                            </div>
                            <div className={styles.data_row}>APR
                                <div className={styles.bar_cont}>
                                    <div className={styles.bar2} />
                                </div>
                                <div>5475%</div>
                            </div>
                            <div className={styles.data_row}>Dev Fee
                                <div className={styles.bar_cont}>
                                    <div className={styles.bar2} />
                                </div>
                                <div>4%</div>
                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
        </div>
    )
}
