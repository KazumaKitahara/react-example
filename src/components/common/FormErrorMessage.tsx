import styled from 'styled-components'
import {FormHelperText} from '@mui/material'
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone'
import {mixins} from '../../mixins'
import * as React from 'react'

const ScFormErrorMessageRoot = styled.div`
    ${mixins.flexRowCenter}
    margin-top: 4px;

    > * {
        color: #ef5350 !important;

        &:first-child {
            margin-right: 2px;
        }
    }
`

const FormErrorMessage = (props: any) => {
    return (
        <ScFormErrorMessageRoot>
            <ErrorTwoToneIcon fontSize="small" />
            <FormHelperText>{props.errorMessage}</FormHelperText>
        </ScFormErrorMessageRoot>
    )
}

export default FormErrorMessage;