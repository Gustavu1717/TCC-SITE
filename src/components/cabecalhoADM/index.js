import './index.scss';
import { Link } from 'react-router-dom';

export default function CabecalhoAdm(){
    return(
        <main className='pagina-cabecalho-adm'>
            <header>
                <section className='cabecalho-adm-um'>
                    <img src='./assets/images/logo.png' alt='logo' id='logo'/>

                    <div className='busca'>
                        <input type='text' placeholder='Busca' />
                        <img src='./assets/images/lupa.png' alt='lupa'/>
                    </div>

                    <div>
                        <img src='./assets/images/userCabecalho.png' alt='userCabecalho' id='user'/>
                        <img src='./assets/images/seta.png' alt='seta' />
                    </div>
                </section>

                <section className='cabecalho-adm-dois'>
                    <Link>Home</Link>
                    <Link>Produto</Link>
                    <Link>Clientes</Link>
                    <Link>Listas de Pedidos</Link>
                </section>
            </header>
        </main>
    )
}