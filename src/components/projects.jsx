/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					
						<span className="heading-meta">My Work</span>
						<h2 className="colorlib-heading animate-box">Experience</h2>
							<h3>Cognizant Technology Solutions - Full-Time (Aug 2022-Present)</h3>
								<p>In this duration I have learnt Salesforce Developer Modules and Basics of apex and done salesforce pet-projects on Payroll-Processing System using LWC and Apex.</p>
								<p>I have worked with Humana PCO Centerwell. I got hands-on experience on Lightning Web component and Apex. </p>
						<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://pragallath28.github.io/Onlinebanking.github.io/">Work 01</a></h3>
											<span>Online Banking Portal</span>
											<p className="icon">
												<span><a href=""><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}