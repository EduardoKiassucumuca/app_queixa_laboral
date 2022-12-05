import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./etapas.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Etapas(){
    return(
        <div class="container">
            <div class="accordion" id="accordionExample">
                <div class="steps">
                    <progress id="progress" value='0' max='100' ></progress>
                    <div class="step-item">
                        <button class="step-button text-center" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1
                        </button>
                        <div class="step-title">
                            Dados Pessoais
                        </div>
                    </div>
                    <div class="step-item">
                        <button class="step-button text-center collapsed" type="button" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2
                        </button>
                        <div class="step-title">
                            Dados da empresa
                        </div>
                    </div>
                    <div class="step-item">
                        <button class="step-button text-center collapsed" type="button" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3
                        </button>
                        <div class="step-title">
                           Descrição da Queixa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Etapas;