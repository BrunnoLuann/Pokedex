import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const HeaderContainer = styled.header`
    width: 100%;
    height: 8%;
    align-items: center;
    display: flex;
    justify-content: space-around;
    @media (max-width: 375px) {
        flex-direction: column;
        align-items: center;
        height: 18vh;

    };
    
`



function Header(props) {

    return (
        <AppBar position="static">
            <Toolbar>
                <HeaderContainer>
                    <Fab variant="extended" size="medium" onClick={props.onClickLeftButton}>
                        {props.leftIcon}
                        {props.leftButton}
                    </Fab>
                    <Typography variant="h4" >
                        {props.titlePage}
                    </Typography>

                    <Fab variant="extended" size="medium" onClick={props.onClickRightButton}>
                        {props.rightIcon}
                        {props.rightButton}
                    </Fab>
                </HeaderContainer>
            </Toolbar>

        </AppBar>


    )

};

export default Header;