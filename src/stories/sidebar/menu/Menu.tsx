import styled from "styled-components"

export const Menu = ({
  name,
  link,
  icon,
}: {
  name: string
  link: string
  icon?: string
}) => {
  return (
    <div>
      {icon}
      <MenuWrapper>{name}</MenuWrapper>
    </div>
  )
}

const MenuWrapper = styled.div`
  background: "#000";
  color: "#f00";
`

export default Menu
