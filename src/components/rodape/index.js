import './index.scss';

export default function Rodape() {
    return(
        <main className='pagina-rodape'>
            <footer>
                <section className='rodape-um'>
                    <div>
                        <h4>AJUDA</h4>
                        <p>Atendimento ao cliente</p>
                        <p>Dúvidas Frequentes</p>
                        <p>Política de Privacidade</p>
                    </div>

                    <div>
                        <h4>INFORMAÇÃO CORPORATIVA</h4>
                        <p>O que nós somos</p>
                        <p>Contato</p>
                    </div>

                    <div>
                        <h4>FORMAS DE PAGAMENTO</h4>
                        <div className='rodape-images'>
                            <img src='./assets/images/cartao.png' alt='cartao' style={{width:'45px', height:'40px'}}/>
                            <img src='./assets/images/elo.png' alt='elo' style={{width:'60px'}}/>
                            <img src='./assets/images/visa.png' alt='visa' style={{width:'50px'}}/>
                        </div>
                    </div>

                    <div>
                        <h4>REDES SOCIAIS</h4>
                        <div className='rodape-images'>
                            <img src='./assets/images/instagram.png' alt='instagram' style={{width:'30px'}}/>
                            <img src='./assets/images/facebook.png' alt='facebook' style={{width:'30px'}}/>
                            <img src='./assets/images/whatsapp.png' alt='whatsapp' style={{width:'30px'}}/>
                        </div>
                    </div>
                </section>
                <hr></hr>
                <section className='rodape-dois'>
                    <p>Seus dados pessoais serão respeitados de acordo com a nossa política de privacidade. *Nada será publicado em sua timeline. Serviço válido somente <br/> para pessoas físicas.Em caso de dúvidas, acesse nossa central de atendimento.</p>
                </section>
            </footer>
        </main>
    )
}