import styles from "../styles/DocumentCard.module.css"
import Image from "next/image"

interface Card {
    id: number,
    title: string,
    subtitle: string,
    image: string
}

export async function getServerSideProps() {
    
    // const filePath = path.join(process.cwd(), "public", "data.json");
    // const jsonData = await fs.promises.readFile(filePath, "utf8");
    // const cards: Card[] = JSON.parse(jsonData)?.achivments;
    
    const req = await fetch("http://localhost:3000/data.json")
    const cards: Card[] = (await req.json())?.achivments;
    
    return {
        props: {
            cards,
        },
        revalidate: 60,
    }
}

interface HomeProps {
    cards: Card[]
}

export default function Home({cards} : HomeProps) {
    return (
        <>
            <div className={styles.box}>

                {cards.map((card) => (
                    <div className={styles.card} key={card.id}>
                        <div className={styles.imgBx}>
                            <Image src={card.image} alt="images" />
                        </div>
                        <div className={styles.details}>
                            <h2>{card.title}<br /><span>{card.subtitle}</span></h2>
                        </div>
                    </div>
                ))}

            </div>

        </>
    );
}