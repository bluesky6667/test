import React from 'react';
import {Button, ButtonGroup} from "reactstrap";
import styled, {css} from 'styled-components';

class I18nMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lan: 'ko',
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick(lan) {
        this.setState({lan});
    }

    render() {
        const StyledBtn = styled(Button)`
            background-color: #fff;
            border-color: #e67e22;
            font-weight: bold !important;
            &:hover {
                color: #212529;
                background-color: #e67e22;
                border-color: #e67e22;
            }
            ${props => {
            if (props.active) {
                return css`
                        color: #212529 !important;
                        background-color: #e67e22 !important;
                        border-color: #e67e22 !important;
                        `;
            }
        }}
        `;

        return (
            <>
                <ButtonGroup style={{marginLeft: '2rem'}}>
                    <StyledBtn outline className="btn-dashed"
                               onClick={() => this.onRadioBtnClick('ko')}
                               active={this.state.lan === 'ko'}>한</StyledBtn>
                    <StyledBtn outline className="btn-dashed"
                               onClick={() => this.onRadioBtnClick('en')}
                               active={this.state.lan === 'en'}>EN</StyledBtn>
                </ButtonGroup>
            </>
        )
    }
}

export default I18nMenu;