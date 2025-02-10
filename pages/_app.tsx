import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { Col, Row } from 'antd';
import Head from 'next/head';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>

        <Head>
          <title>نزدیک قله ایم</title>
        </Head>


        <div dir='rtl'>

          <header>

            <Row justify="center" style={{ marginTop: '50px' }}>
              <Col>
                  <h1 style={{color: "white"}}>ایران در قله</h1>
              </Col>
            </Row>

            <hr/>
            <br/>
      
          </header>

          <main>
            <Component {...pageProps} />
          </main>

          <footer>
          <br/>
          <hr/>

          <Row justify="start" style={{ marginTop: '50px',padding: "0 55px" }}>
            <Col>
  
                <h3 style={{color: "white"}}>
                  برای مشارکت در این پروژه می‌توانید از راه های زیر اقدام کنید

                  <ul>
                    <li>ارسال پیام به <a href="https://t.me/@s_ali_najjar_66">@s_ali_najjar_66</a> در تلگرام</li>
                    <li>ارسال پیام به <a href="https://eitaa.com/ali_najjar">@ali_najjar</a> در ایتا</li>
                    <li>ارسال پیام به <a href="https://x.com/_ali_najjar_">@_ali_najjar_</a> در X</li>
                    <li>مشارکت در مخزن <a href="https://github.com/ali-najjar/iran-dar-ghole">ali-najjar/iran-dar-ghole</a></li>
                  </ul>

                </h3>
              
            </Col>
          </Row>


        </footer>
      </div>

    </>

  )
}

