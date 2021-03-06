import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
   width: 200px;
   text-transform: uppercase;
   font-weight: bold;
   border-radius: 10px;
   padding:1rem;
   background: #D85531;
   color:white;
   border:none;
   cursor: pointer;
   &:hover{
      opacity: 0.85;
   }
`