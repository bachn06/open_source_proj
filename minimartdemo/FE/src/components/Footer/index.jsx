import { images } from "constant";
import {
	Button,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	Row,
} from "reactstrap";

function Footer() {
	return (
		<footer
			className='footer'
			style={{ backgroundImage: `url(${images.BG_FOOTER})` }}>
			<Container className='footer__container'>
				<Row>
					<Col>
						<img
							src={images.LOGO_B}
							alt='logo'
							className='footer__logo'
						/>

						<div className='footer__info'>
							<p className='footer__info__title'>
								Siêu thị MiniMart cung cấp các mặt hàng siêu
								sạch đem lại sức khỏe cho bạn
							</p>
							<div className='footer__contact'>
								<div className='footer__contact__item'>
									<div className='footer__contact__item__img'>
										<i className='fas fa-flag'></i>
									</div>
									<span className='footer__contact__item__text'>
										Tầng 6 Ladeco, 266 Đội Cấn, Hà Nội,
										Vietnam
									</span>
								</div>
								<div className='footer__contact__item'>
									<div className='footer__contact__item__img'>
										<i className='fas fa-phone'></i>
									</div>
									<a
										href='tel:19006750'
										className='footer__contact__item__link'>
										1900 6750
									</a>
								</div>
								<div className='footer__contact__item'>
									<div className='footer__contact__item__img'>
										<i className='fas fa-envelope'></i>
									</div>
									<a
										href='mailto:support@sapo.vn'
										className='footer__contact__item__link'>
										support@sapo.vn
									</a>
								</div>
							</div>
						</div>
					</Col>
					<Col>
						<ul className='footer__list'>
							<h3 className='footer__list__title'>Tài khoản</h3>
							<li className='footer__item'>Trang chủ</li>
							<li className='footer__item'>Giới thiệu</li>
							<li className='footer__item'>Sản phẩm</li>
							<li className='footer__item'>Tin tức</li>
							<li className='footer__item'>Liên hệ</li>
						</ul>
					</Col>
					<Col>
						<ul className='footer__list'>
							<h3 className='footer__list__title'>
								Hỗ trợ khách hàng
							</h3>
							<li className='footer__item'>Trang chủ</li>
							<li className='footer__item'>Giới thiệu</li>
							<li className='footer__item'>Sản phẩm</li>
							<li className='footer__item'>Tin tức</li>
							<li className='footer__item'>Liên hệ</li>
						</ul>
					</Col>
					<Col>
						<div className='footer__mail'>
							<h3 className='footer__mail__title'>Gửi mail</h3>
							<p className='footer__mail__desc'>
								Gửi email nhận khuyến mãi
							</p>
							<Form className='footer__mail__form'>
								<InputGroup>
									<Input
										className='footer__mail__input'
										placeholder='Email của bạn'
									/>
									<Button
										className='footer__mail__btn'
										type='submit'>
										<i className='fab fa-telegram-plane'></i>
									</Button>
								</InputGroup>
							</Form>

							<div className='footer__social'>
								<h3 className='footer__social__title'>
									Kết nối
								</h3>

								<div className='footer__social__list'>
									<p className='footer__social__item'>
										<i className='fab fa-google-plus-g'></i>
									</p>
									<p className='footer__social__item'>
										<i className='fab fa-twitter'></i>
									</p>
									<p className='footer__social__item'>
										<i className='fab fa-facebook-f'></i>
									</p>
									<p className='footer__social__item'>
										<i className='fab fa-linkedin-in'></i>
									</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>

				<div className='footer__copyright'>
					<p>
						© Bản quyền thuộc về <span>Cafein Team</span> | Cung cấp
						bởi <span>Sapo</span>
					</p>
					<Button
						className='footer__copyright__btn shadow-none'
						onClick={() => {
							window.scrollTo(0, 0);
						}}>
						Lên đầu trang
						<i className='fas fa-arrow-up'></i>
					</Button>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
