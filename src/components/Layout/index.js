import styleLayout from './style.module.css';

// import { ReactComponent as ReactLogo } from '../../';

const Layout = ({ id, title, colorBg, urlBg, colorTilte, children }) => {
	const styleBgColor = colorBg ? { backgroundColor: `${colorBg}` } : {};
	const styleBgImg = urlBg ? {backgroundImage: `url(${urlBg})`} : {};
	const styleColorTitle = colorTilte ? {color: `${colorTilte}`} : {};

	return (
		<section className={styleLayout.root} id={id} style={{...styleBgImg, ...styleBgColor, ...styleColorTitle}}>
		    <div className={styleLayout.wrapper}>
		        <article>
		            <div className={styleLayout.title}>
		                <h3>{title}</h3>
		                <span className={styleLayout.separator}></span>
		            </div>
		            <div className={styleLayout.desc + ' ' + styleLayout.full}>
		                {children}
		            </div>
		        </article>
		    </div>
		</section>
	)
}

export default Layout;