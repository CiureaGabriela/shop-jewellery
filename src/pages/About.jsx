import React from 'react';
import Layout from '../components/Layout';

function About() {
    return(
        <div className="mb-5">
            <Layout>
                <h1 className="text-center my-5">Universul Teilor</h1>
                <img className=" mx-5" src="https://cdn1.teilor.ro/slir/w1201//teilor.ro/cs-content/cs-photos/articles/original/1951__1591128238.jpg"/>\
                
                 <h3 className="text-center my-5 font-weight-bold">
                     PURE DIAMONDS
                 </h3>
                 
            
                <p className="text-center ml-10 mr-10 ">
                  Bijuteriile autentice sunt pentru totdeauna. <br/>
                  Iar designerii care folosesc ca sursă de inspiraţie dragostea, vor găsi mereu raţionamente puternice pentru a da viaţă unor colecţii unice.
                </p>
                <p className="text-center ml-10 mr-10">
                 Compania Teilor a fost înfiinţată în 1998 de către o echipă de bijutieri experimentaţi,<br/>
                 care şi-au dorit să creeze o linie de bijuterii unică, cu design imprevizibil, elegant și nu întotdeauna clasic.
                </p>
            </Layout>
        </div>
    );
}

export default About;