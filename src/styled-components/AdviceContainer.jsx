import styled from "styled-components";
import { neon_green, medium_blue } from "../theme/colors";

export const AdviceContainer = styled.div`
    width: 800px;
    /* margin: 0 auto; */
    text-align: center;
    background-color: ${medium_blue};
    border-radius: 10px;
    padding: 30px 40px 50px 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        font-size: 14px;
        letter-spacing: 3px;
        color: ${neon_green};
        text-transform: uppercase;
    }

    p{
        font-size: 28px;
    }
    
    button{
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${neon_green};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center; 
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            box-shadow: 0px 0px 30px 0px ${neon_green};
        }
    }
`