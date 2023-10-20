import React from 'react'
import * as S from './Nav.styles'

const { useState } = React

function Nav() {
	const [visible, setVisible] = useState(true)
	const toggleVisibility = () => setVisible(!visible)

	return (
		<S.Nav>
			<S.NavLogo>
				<S.LogoImage src="img/logo.png" alt="logo" />
			</S.NavLogo>
			<S.NavBurger onClick={toggleVisibility}>
				<S.BurgerLine />
				<S.BurgerLine />
				<S.BurgerLine />
			</S.NavBurger>

			<S.NavMenu>
				{visible && (
					<S.MenuList>
						<S.MenuItem>
							<S.MenuLink href="index.html">Главное</S.MenuLink>
						</S.MenuItem>
						<S.MenuItem>
							<S.MenuLink href="index.html">Мой плейлист</S.MenuLink>
						</S.MenuItem>
						<S.MenuItem>
							<S.MenuLink href="../signin.html">Войти</S.MenuLink>
						</S.MenuItem>
					</S.MenuList>
				)}
			</S.NavMenu>
		</S.Nav>
	)
}

export default Nav
