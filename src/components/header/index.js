import React, { Component } from 'react'

export default class Header extends Component {
	
	constructor ( props ) {

		super( props )
		
		this.state = {
			open: false,
			showModalMobile: false
		}

	}

  	isActive ( value ) {
    	return `navbar-collapse ${ (( value === true ) ? 'collapse in': 'default' ) }`
  	}

  	showModalMobile () {
  		this.setState({ showModalMobile: true })
  	}	

	render() {
		return (
			<header id="comparamejor-main-header" className="rastreator comparamejor-main-header">
				<nav className="navbar navbar-default comparamejor-main-header__navbar" role="navigation">
					<div className="container comparamejor-main-header__container">
						{/*Brand and toggle get grouped for better mobile display */}
						<div className="navbar-header comparamejor-main-header__navbar-header">
							<a className="navbar-brand comparamejor-main-header__navbar-brand" href="https://comparamejor.com/">
								<img src="https://segdig1.s3.amazonaws.com/static/bower_components/frontendquillo/images/main/ComparaMejor.svg" height="72px" width="auto" alt="ComparaMejor.com"/>
							</a>
						</div>

						<section className="right-section">
							<button onClick={ this.showModalMobile.bind( this ) } className="btn btn-callme visible-xs">
								<i className="fa fa-phone"></i> Llámame ya!
							</button>
		                    
		                    <div className="hidden-xs contact">
		                        <span className="first"><a href="tel:7561234"><i className="fa fa-phone"></i></a> (1) 756 1234</span>
		                    </div>
						</section>

					</div>
				</nav>
			</header>
		)
	}
}