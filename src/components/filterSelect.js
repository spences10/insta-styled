import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { filters } from './filters/filters'

const SelectWrapper = styled.div`
  grid-area: t;
  margin: 0.25rem 0rem;
  padding: 0rem 0rem;
`

const Select = styled.select`
  margin: 0.25rem 0rem;
  padding: 0rem 0rem;
  font-family: ${({ theme }) => theme.fontBody};
  border: 1px solid ${props => props.border};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.foreground};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: ${({ theme }) => theme.fontBody};
`

const FilterSelect = () => {
  return (
    <SelectWrapper>
      <Select onChange={e => console.log(e)}>
        {Object.keys(filters).map((filter, index) => {
          return (
            <SelectOpt key={index} value={filter}>
              {filter}
            </SelectOpt>
          )
        })}
      </Select>
    </SelectWrapper>
  )
}

FilterSelect.propTypes = {
  handleThemeChange: PropTypes.func
}

export default FilterSelect
