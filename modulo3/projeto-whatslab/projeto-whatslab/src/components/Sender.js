import React from 'react';
import styled from 'styled-components';
import { StyleContent } from '../style'
import SendMessage from './SendMessage';

const Sender = (props) => {
	return (
		<StyleContent>
			<input
				placeholder={'Remetente'}
				value={props.inputSender}
				onChange={props.onChangeSender}
			/>
			<input
				placeholder={'Mensagem'}
				value={props.inputSender}
				onChange={props.onChangeSender}
			/>
			 <button onClick={SendMessage}>Enviar</button>
		</StyleContent>
	)
}
export default Sender;