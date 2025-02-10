import { Col, Row } from "antd";
import styles from "../styles/DocumentCard.module.css"
import fs from "fs"
import path from "path"

interface Card {
    title: string,
    subtitle: string,
    image: string
}

export async function getStaticProps() {
    
    const filePath = path.join(process.cwd(), "public", "data.json");
    const jsonData = await fs.promises.readFile(filePath, "utf8");
    const cards: Card[] = JSON.parse(jsonData)?.achivments;
    
    // const req = await fetch("http://localhost:3000/data.json")
    // const cards: Card[] = (await req.json())?.achivments;
    
    return {
        props: {
            cards,
        }
    }
}

interface HomeProps {
    cards: Card[]
}

export default function Home({cards} : HomeProps) {
    return (
        <>
           
            <div className={styles.box}>
          
                <Row>

                    {cards.map((card, index) => {
                        
                        const key = `col-${index}`;
                        return (
                            <Col
                                 
                                key={key}
                                xl={{flex: '33.33%'}}
                                lg={{flex: '33.33%'}}
                                md={{flex: '50%'}}
                                sm={{flex: '100%'}}
                                xs={{flex: '100%'}}
                                
                            >
                                <div className={styles.card}>
                                    <div className={styles.imgBx}>
                                        <img src={card.image} alt="images" />
                                    </div>
                                    <div className={styles.details}>
                                        <h2>{card.title}<br /><span>{card.subtitle}</span></h2>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}            
                </Row>
            </div>
        </>
    );
}