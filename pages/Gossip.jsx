import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sublanding from '../components/Sublanding'
import Post_wrapper from '../components/Post_wrapper'
import Mobile from '../components/subcomponents/sublanding/Mobile'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function gossip() {
    return (
        <div className={styles.container}>
        <Head>
          <title>Entertainment</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/drawing.svg" />
        </Head>


        <Navbar />



        <main className={styles.main}>

            <Sublanding />
            <Mobile/>

            <Post_wrapper />

            <Post_wrapper />
        
        
        
        
      </main>




        <Footer />


            
        </div>
    )
}
