import React from 'react';
import './ModalAddCours.scss'

const ModalAddCours = ({active, setActive}) => {
    return (
        <div className={ active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={'modalInner'} onClick={e => e.stopPropagation()}>
                <div className="inputM">
                    <input type="text" placeholder='Название курса'/>
                </div>
                <div className="textM">
                    <textarea placeholder={'Описание курса'}/>
                </div>
            </div>
        </div>
    );
};

export default ModalAddCours;