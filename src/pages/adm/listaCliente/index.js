import CabecalhoAdm from '../../../components/cabecalhoADM';
import './index.scss';

export default function ListaCliente(){
    <main className='pagina-lista-cliente'>
        <CabecalhoAdm />
        <header className='lista-cliente-principal'>
            <section>
                <div>
                    <img src='./assets/images/editar.png' alt='lista' />
                    <h2>Lista de Clientes</h2>
                </div>

                <div className='busca'>
                    <input type='text' placeholder='Busca' />
                    <img src='./assets/images/lupa.png' alt='lupa' />
                </div>
            </section>

            <section>
                <table>

                </table>
            </section>
        </header>
    </main>
}