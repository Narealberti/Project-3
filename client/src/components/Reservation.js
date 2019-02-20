import React, { Component } from 'react';
import Pic5 from '../img/IMG_4719.jpg';
import axios from 'axios'
import classnames from 'classnames';
import '../css/admin.css'






class Reservation extends Component {
constructor(props) {
        super(props)
        this.state = {
            name:'',
					phone: '',
					date:'',
					time:'',
					person: 1,
					errors: {}
            
        }

    }


	onSubmit(e) {
		e.preventDefault()
		const order = {
			name: this.state.name,
			phone: this.state.phone,
			time: this.state.time,
			date: this.state.date,
			person: this.state.person,
        
		}

		axios.post('api/orders/order', order)
					
			.then(res => this.props.history.push('/thankyou'))
			.catch(err => this.setState({ errors: err.response.data }))
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
		}
		

	render() {

const {errors}= this.state
	
		
		return (
			<div>

				<section className="page-section clearfix">
					<div className="container">
						<div className="intro">
							<img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={Pic5} alt="" />
							<div className="intro-text left-0 text-center bg-faded p-5 rounded">
								<h2 className="section-heading mb-4">
									<span className="section-heading-upper">TABLE TYPE</span>

								</h2>

								<div id="booking" className="section">

									<div className="section-center">
										<div className="container">
											<div className="row">
												<div className="booking-form">
									
													<form noValidate onSubmit={this.onSubmit.bind(this)}>


														<div className="form-group">
														</div>
														<div className="row">
															<div className="col-md-6">
																<div className="form-group">
																	<span className="form-label">Name</span>
								
																	<input
																		className={classnames("form-control", {
																			'is-invalid':errors.name
																		})}
																		type="text"
																		placeholder="Bob Lee" name='name'
																		value={this.state.name}
																		onChange={this.onChange.bind(this)} />

																</div>
																	{errors.name && (
																	<p className='errors-p'>{errors.name}</p>
                  )}
																
															</div>
															
															<div className="col-md-6">
																<div className="form-group">
																	<span className="form-label">Phone</span>
																	<input
																			className={classnames("form-control", {
																			'is-invalid':errors.phone
																		})}
																		type="text" name='phone'
																		value={this.state.phone}
																		placeholder="(000) 000-0000"
																		onChange={this.onChange.bind(this)} />

																</div>
																							{errors.name && (
																	<p className='errors-p'>{errors.phone}</p>
                  )}
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<span className="form-label">Date</span>
																	<input
																			className={classnames("form-control", {
																			'is-invalid':errors.date
																		})}
																		type="date" name='date'
																		value={this.state.date}
																		onChange={this.onChange.bind(this)} />

																</div>
																							{errors.date && (
																	<p className='errors-p'>{errors.date}</p>
                  )}
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<span className="form-label">Time</span>
																	<input
																		className={classnames("form-control", {
																			'is-invalid':errors.time
																		})}
																		type="time" name='time'
																		value={this.state.time}
																		onChange={this.onChange.bind(this)} />

																</div>
																							{errors.time && (
																	<p className='errors-p'>{errors.time}</p>
                  )}
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	
																	
																	 <span className="form-label"> Guest Number</span>
                              <select 	className={classnames("form-control form-control-lg'", {
																			'is-invalid':errors.person
															})} name='person' value={this.state.person} onChange={this.onChange.bind(this)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
									        </select>
										
																</div>
																{errors.person && (
																	<p className='errors-p'>{errors.person}</p>
                  )}
						
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<input className="btn btn-primary" type="submit" value="Submit" />
																</div>
															</div>
														</div>
													</form>
												</div>


											</div>



										</div>


									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

  <section className="page-section cta">
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <div className="cta-inner text-center rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Our Promise</span>
              <span className="section-heading-lower">To You</span>
            </h2>
            <p className="mb-0">We are dedicated to providing our customers with a fantastic customer service and a welcoming atmosphere!
              
            </p>
          </div>
        </div>
      </div>
					</div>
				
				</section>
				 
			</div>
			
		)
	}
}
export default Reservation;



