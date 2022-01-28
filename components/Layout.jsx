import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout ({children, title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <Navbar></Navbar>
            
            <main>
                {children}
            </main>
               
            <Footer></Footer>
        </div>
    )
}

Layout.defaultProps = {
    title: "PaginaConsultant",
    description: "pagina de consultora",

};
