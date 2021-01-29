import styleHeader from './style.module.css';

// import { ReactComponent as ReactLogo } from '../../';

const Header = ({ title, descr }) => {


	return (
		<header className={styleHeader.root}>
		    <div className={styleHeader.forest}></div>
		    <div className={styleHeader.container}>
		        <h1>{title}</h1>
		        <p>{descr}</p>
		    </div>
		</header>

		// <div className={s.root} style={styleRoot}>
		// 	<div className={s.container}>
		// 		{ title && 
		// 			(<h1 className={s.header}>
		// 				{title}
		// 			</h1>)
		// 		}
		// 		{ descr && <p className={s.paragraph}>{descr}</p> }
		// 	</div>
		// </div>
	)
}

export default Header;