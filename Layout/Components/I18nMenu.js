import React from 'react';
import {Button, ButtonGroup} from "reactstrap";
import styled, {css} from 'styled-components';

class I18nMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rSelected: 'ko',
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({rSelected});
    }

    render() {
        const style = {
            marginLeft: '2rem'
        }

        const StyledBtn = styled(Button)`
            background-color: #fff;
            border-color: #e4833b;
            font-weight: bold !important;
            &:hover {
                color: #212529;
            }
            ${props => {
                if (props.active) {
                    console.log('active true');
                    return css`
                        color: #212529 !important;
                        background-color: #e4833b !important;
                        border-color: #e4833b !important;
                        `;
                }
                }}
        `;

        return (
            <>
                <ButtonGroup style={style}>
                    <StyledBtn outline className="btn-dashed"
                            onClick={() => this.onRadioBtnClick('ko')}
                            active={this.state.rSelected === 'ko'}>한</StyledBtn>
                    <StyledBtn outline className="btn-dashed"
                            onClick={() => this.onRadioBtnClick('en')}
                            active={this.state.rSelected === 'en'}>EN</StyledBtn>
                </ButtonGroup>
            </>
        )
    }
}

export default I18nMenu;