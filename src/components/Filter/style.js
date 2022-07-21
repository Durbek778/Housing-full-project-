import styled from "styled-components";
import {ReactComponent as Search} from '../../assets/icons/search.svg'
import {ReactComponent as Setting } from '../../assets/icons/setting.svg'


const Container = styled.div`
display: flex;
gap: 20px;
margin: 10px 131px;
`

const Icon = styled.div``

Icon.Search = styled(Search)`
margin-right: 8px;
`
Icon.Setting = styled(Setting)`
margin-right: 8px;
`

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
`

const Fragment = styled.div`
display: flex;
margin-bottom: 20px;
gap: 20px;
`

const Title = styled.div`
font-family: 'Fira Code', monospace;
font-style: bold;
font-size: 16px;
line-height: 24px;
color: #0D263B;
margin-bottom: 10px;
`

export { Container, Icon, Wrapper, Fragment, Title}
